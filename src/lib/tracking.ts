/**
 * Tracking library for the resume builder.
 *
 * This module manages a unique session identifier, sends events to
 * the serverless API endpoint and exposes helper functions for
 * recording visits and other interactions. Events are stored in
 * Supabase via the serverless function and may trigger emails.
 */

// Key used to persist the session identifier in sessionStorage. The
// session persists across page reloads but not across browser tabs.
const SESSION_KEY = 'resume_session_id';

/**
 * Retrieves the current session ID or generates a new one using the
 * Web Crypto API. The ID is stored in sessionStorage so it remains
 * consistent for the lifetime of the tab.
 */
/**
 * Generates a session identifier. In the no analytics build this function
 * simply returns a random string without persisting it anywhere. If the
 * Crypto API is available a UUID will be generated; otherwise a random
 * alphanumeric fallback is used. Because no analytics are collected
 * there is no need to store this ID between requests.
 */
export function getSessionId(): string {
  if (window.crypto && 'randomUUID' in window.crypto) {
    return window.crypto.randomUUID();
  }
  return Math.random().toString(36).substring(2);
}

/**
 * Sends a tracking event to the `/api/track` endpoint. If the request
 * fails (e.g. offline), the error is silently ignored.
 *
 * @param event The event name. Must match one of the allowed events
 *              recognised by the serverless function.
 * @param payload Additional contextual information. Avoid sending any
 *                personally identifiable information (PII) or resume
 *                content; send only metadata such as section keys.
 */
/**
 * Sends a tracking event. In the no analytics build this function does
 * nothing. It is retained to avoid breaking imports in the rest of the
 * application. The return value is a resolved Promise so that callers
 * awaiting it will not fail.
 */
export async function trackEvent(
  _event: string,
  _payload: Record<string, any> = {},
): Promise<void> {
  // Intentionally no op.
  return Promise.resolve();
}

/**
 * Tracks the initial page visit. Should be invoked once on page load.
 * Gathers referrer, user agent and timezone information. Does not
 * collect any unique identifiers beyond what the browser provides.
 */
/**
 * Records a visit. In the no analytics build this function is a no‑op.
 * It is retained for API compatibility with the analytics version. No
 * network requests or data collection occur.
 */
export function trackVisit(): void {
  // No tracking performed.
}
