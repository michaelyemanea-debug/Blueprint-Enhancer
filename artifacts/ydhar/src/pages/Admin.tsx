import { useState } from 'react';
import { Loader2, LockKeyhole, RefreshCw } from 'lucide-react';
import {
  useListContactSubmissions,
  getListContactSubmissionsQueryKey,
} from '@workspace/api-client-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

/**
 * Internal-only page for reviewing contact form submissions. Not linked from
 * the public navigation. Access is gated by the ADMIN_API_KEY configured on
 * the API server -- the key is entered here and sent as a header on each
 * request, never stored or persisted client-side.
 */
export default function Admin() {
  const [keyInput, setKeyInput] = useState('');
  const [activeKey, setActiveKey] = useState<string | null>(null);

  const submissionsQuery = useListContactSubmissions({
    query: {
      queryKey: getListContactSubmissionsQueryKey(),
      enabled: activeKey !== null,
    },
    request: { headers: activeKey ? { 'x-admin-key': activeKey } : undefined },
  });

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveKey(keyInput);
  };

  return (
    <div className="min-h-[100dvh] bg-background flex flex-col items-center py-20 px-4">
      <div className="w-full max-w-4xl">
        <Card className="border-border shadow-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-display">
              <LockKeyhole className="w-5 h-5" /> Contact Inquiries
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUnlock} className="flex gap-3">
              <Input
                type="password"
                placeholder="Admin key"
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                autoComplete="off"
                className="flex-1"
              />
              <Button type="submit" disabled={!keyInput}>
                Unlock
              </Button>
              {activeKey !== null && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => submissionsQuery.refetch()}
                  disabled={submissionsQuery.isFetching}
                >
                  {submissionsQuery.isFetching ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <RefreshCw className="w-4 h-4" />
                  )}
                </Button>
              )}
            </form>
          </CardContent>
        </Card>

        {activeKey !== null && submissionsQuery.isLoading && (
          <p className="text-muted-foreground text-sm">Loading submissions...</p>
        )}

        {activeKey !== null && submissionsQuery.isError && (
          <p className="text-sm text-red-600">
            Could not load submissions. Check the admin key and try again.
          </p>
        )}

        {activeKey !== null && submissionsQuery.data && (
          <Card className="border-border shadow-sm">
            <CardContent className="pt-6">
              {submissionsQuery.data.length === 0 ? (
                <p className="text-muted-foreground text-sm">No submissions yet.</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Asset Class</TableHead>
                      <TableHead>Message</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissionsQuery.data.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell className="whitespace-nowrap text-xs text-muted-foreground">
                          {new Date(submission.createdAt).toLocaleString()}
                        </TableCell>
                        <TableCell className="font-medium">{submission.name}</TableCell>
                        <TableCell>{submission.company ?? '—'}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.phone ?? '—'}</TableCell>
                        <TableCell>{submission.assetClass ?? '—'}</TableCell>
                        <TableCell className="max-w-xs whitespace-pre-wrap">
                          {submission.message}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
