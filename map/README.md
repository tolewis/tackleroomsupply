# TackleRoom Map

## East Coast / Florida taxonomy notes

Refined on 2026-03-12 for clearer SEO and buyer-intent alignment.

### Current East Coast / Florida region split
- Mid-Atlantic Canyons & Striper Coast
- Outer Banks, NC
- Carolina Gulf Stream
- South Florida Sailfish Coast
- Florida Keys
- US Gulf Coast

### Assignment rules
- `outer-banks` destination stays mapped to `outer-banks-nc`
- `florida-keys` destination stays mapped to `florida-keys`
- `carolina-gulf-stream` and `south-florida-sailfish-coast` are intentional taxonomy regions with explicit fish framing but no fake destination coverage yet

### Why
The map is region-first. These splits are allowed to overlap the real-world fishery conversation when that makes search intent and on-site navigation clearer.

## Detail card implementation (2026-11-14, modern-web-guidance fixes)

The destination/fish detail card is a native non-modal `popover` (map/index.html: `<div id="popover" popover>`).
`js/popover.js` feature-detects:

- Popover API + CSS anchor positioning → the card anchors to the clicked Leaflet marker (`style.anchorName = '--pin'`)
  and follows it on pan/zoom via `position-anchor` (css/map.css). No `getBoundingClientRect` math.
- Popover API without anchor support → the card still opens in the top layer; JS positions it with the old
  rect math, converted to viewport coordinates (top layer `position:absolute` references the viewport).
- No popover API → class toggling (`hidden`) plus the original rect math, unchanged.

Escape closes via the popover API on modern engines (a manual `keydown` listener remains for the rest), and the
browser restores focus to the clicked marker. The versioned unpkg Leaflet/MarkerCluster/Fuse assets carry
Subresource Integrity hashes.
