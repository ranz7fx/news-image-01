# news-image-01 — "The World in One Day"

A newspaper front page in one picture, summing up the world's news of
Friday 13 November 2026 — the day's most consequential stories, across
regions and fields, each clear from its picture and a short label:

- **U.S. flights grounded** — the FAA halts all departures after an
  air-traffic control communications failure; flights resume Friday evening.
- **Microsoft down, day 2** — Outlook, Teams and Copilot out in 70+
  countries after an outage that began on 12 November.
- **Nvidia chief quits** — Jensen Huang resigns; Congress summons him;
  shares fall.
- **Ukraine's big drone raid** — nearly 1,200 drones fired at Russia as
  peace talks widen to include Europe.
- Also: U.S. downs Iranian drones headed for Bahrain; Taiwan details
  China's big Pacific drills; Qatar-Turkey sign a defence pact; Ebola
  cases pass 11,000; Gaza storms flood camps; Pochettino to Manchester
  United.

Every fact is as reported on 13 November 2026. The four photographs are
editorial images made for this entry; the masthead, headlines and captions
are set in type so they stay sharp and legible at 300 pixels as well as at
full size.

## Entry

`main.ts` (Node 22, standard library only) copies the picture beside it
(`entry.png`, 1024x1024 JPEG, 220,215 bytes) to `/output/entry.png`.
Deterministic: the same bytes on every run, no network, no randomness.

## Verify

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
sha256sum out1/entry.png out2/entry.png entry.png
```

## License

MIT (see LICENSE).
