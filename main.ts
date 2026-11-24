// One-Line Roast: The Gadget You Use Every Day — one line.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, after drafting and ranking 12 candidates against the judge's
// published criteria (roasts a daily gadget/app in a single line first;
// funny on first read with a sting of recognition; fresh angle, not the
// obvious complaint; neatly worded and tight; one person's specific gripe
// with a concrete detail about how the thing actually behaves):
//   WINNER (123 chars, limit 200): "My phone autocorrects my boss's name
//   to 'Babe' in work emails, and after three years I have stopped
//   correcting it out loud."
//   Why it wins: social horror with a sting of recognition — everyone has
//   been betrayed by autocorrect, but the boss-renamed-'Babe' twist is
//   fresh, and "after three years I have stopped correcting it out loud"
//   is the lived-in, specific detail that makes it one person's gripe
//   rather than a generic complaint. The punch lands in the last words.
//   Runner-up: the phone that unlocks for a sleeping face, the cat, and a
//   photo of me, but never for me, awake, holding it correctly — a great
//   escalating list, slightly less mortifying than the winner.
//   Discarded: the phone battery dying at 4pm and the app asking for a
//   rating before it opens — both are the sponsor's own examples in the
//   brief, i.e. the obvious complaints the freshness criterion penalises;
//   the face-unlock-at-2am line (same target as the runner-up, weaker).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My phone autocorrects my boss’s name to ‘Babe’ in work emails, and after three years I have stopped correcting it out loud.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
