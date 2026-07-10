---
name: Admin key-gated endpoints need their own rate limit
description: Shared-secret (x-admin-key style) admin routes are brute-forceable if only public routes have rate limiting.
---

When adding a simple shared-secret header auth (e.g. `x-admin-key` checked with
`crypto.timingSafeEqual` against an env secret) for a low-traffic internal
admin page, don't assume the public-facing rate limiter covers it.

**Why:** A code review caught that the public POST endpoint had rate limiting
but the admin GET endpoint (protected only by a static key compared
per-request) had none — allowing unlimited online guessing attempts against
PII-bearing data.

**How to apply:** Any route gated solely by a static shared secret (no
session/cookie, no lockout) should get its own per-IP rate limiter applied
before the auth check. For a single-owner internal tool, a generous window
(e.g. 20 req/15min) is enough to stop brute-forcing without hurting the
legitimate user. If the tool grows beyond one owner or handles more sensitive
data, prefer exchanging the key once for a short-lived signed session cookie
instead of sending the raw key on every request.
