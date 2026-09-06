# Run Rabbit Run 100 (Sept 18-19, 2026): Course Weather Brief

**Purpose.** Everything needed to put an elevation-correct hourly weather forecast on Shannon's race dashboard (currently https://myrecoverysteps.com/rrrr) for every aid station and every point on the course. Written for an AI assistant or developer to ingest and build from directly.

**Status.** Every number and API behavior below was verified against the live APIs on 2026-09-03 using the actual RRR course GPX. Sample forecast values are from that date and are illustrative only; they are not the race-day forecast.

---

## 1. The short version

1. **Use Open-Meteo** (https://api.open-meteo.com/v1/forecast). Free, no API key, browser-callable (CORS on), and it accepts a per-point `elevation` parameter that does a real physical adjustment of temperature, feels-like and wind. Verified: same lat/lon, 6,729 ft vs 10,571 ft, temperature moved 15.3°F, feels-like moved 20.4°F, wind moved 11 to 19 mph.
2. **One HTTP call covers all 17 aid stations** with their exact elevations (multi-location request). Verified: 17 location objects returned, every elevation matched the GPX within 1 ft.
3. **The town forecast is the trap.** Steamboat Springs (6,736 ft) versus Summit Lake (10,348 ft) differed by up to **25.8°F in feels-like temperature** at the same hour. Shannon's 2023 attempt unraveled in the cold; her 2023 dashboard temperature panel is the town station. Do not show town weather.
4. **Do not use Google WeatherNext 3 / Maps Weather API for this.** Excellent model, but the endpoint takes lat/lon only and no elevation. It cannot do the one thing this course requires. NWS (api.weather.gov) is a fine free second opinion but also has no elevation override.
5. **Precipitation probability is coarse** (27 km ensemble, not elevation-aware). Precipitation amount, snowfall and freezing level come from the high-resolution model and are the ones to trust for "will it snow on the ridge."

---

## 2. Race facts

| Item | Value |
|---|---|
| Race | Run Rabbit Run 100, Steamboat Springs, CO |
| Dates | Fri Sept 18 to Sat Sept 19, 2026 |
| Shannon's wave | Tortoise, start **Fri 09:00 MDT**, 36 hour limit, course closes **Sat 21:00 MDT** |
| Other waves (for reference) | Tortoise Early Bird 07:00 (38 h), Hare 13:00 (30 h) |
| Time zone | America/Denver, MDT = UTC-6 through the race (DST ends Nov 1) |
| Course | 101.8 mi, about 20,400 ft climb, **6,729 to 10,587 ft**, 3,858 ft of vertical spread |
| Sunset Fri Sept 18 | 19:11 MDT (Open-Meteo daily; Tyler's page says 7:07 PM, 4 min apart, immaterial) |
| Sunrise Sat Sept 19 | about 06:52 MDT (Sept 18 sunrise is 06:51; Sept 19 will be in the API once the horizon reaches it) |
| Night on course (32:00 plan) | about 11.7 hours, Fri 19:11 to Sat 06:52 |
| 2023 attempt | DNF at Olympian Hall 2nd pass (mile 63.9) at 20:11 elapsed; town station read 68°F afternoon high, 34°F dawn low |

### Aid stations (coordinates snapped to the course GPX, elevations from the GPX)

Arrival times are Tyler's current 32:00 goal plan. **Read arrivals live from the dashboard, never hardcode them**; a slower finish pushes every back-half arrival later and into different weather.

| # | Aid station (pass) | Mile | Lat | Lon | Elev ft | Elev m | Crew / pacer | 32:00 plan arrival |
|---|---|---|---|---|---|---|---|---|
| 1 | Steamboat Base (start) | 0.0 | 40.45954 | -106.80069 | 7067 | 2154 | crew | Fri 09:00 |
| 2 | Mt Werner (OUT) | 5.4 | 40.45322 | -106.74687 | 10358 | 3157 | none | Fri 10:30 |
| 3 | Fish Creek Falls (OUT) | 17.7 | 40.48242 | -106.78127 | 7497 | 2285 | crew (foot/bike only) | Fri 13:06 |
| 4 | Long Lake (OUT) | 24.3 | 40.47656 | -106.68395 | 9915 | 3022 | none | Fri 16:35 |
| 5 | Summit Lake (OUT) | 30.1 | 40.54174 | -106.68400 | 10344 | 3153 | crew | Fri 19:00 |
| 6 | Billy's Rabbit Hole (OUT) | 34.3 | 40.52056 | -106.72641 | 10062 | 3067 | none, minimal aid | Fri 20:14 |
| 7 | Dry Lake (OUT) | 44.5 | 40.53480 | -106.78423 | 8323 | 2537 | crew + pacer | Fri 22:33 |
| 8 | Olympian Hall (OUT) | 51.2 | 40.48324 | -106.83818 | 6732 | 2052 | crew + pacer | Sat 00:24 |
| 9 | Lane of Pain (1st) | 54.4 | 40.46074 | -106.85557 | 8212 | 2503 | none, minimal aid | Sat 01:25 |
| 10 | Lane of Pain (2nd) | 58.1 | 40.46085 | -106.85584 | 8182 | 2494 | none, minimal aid | Sat 02:21 |
| 11 | Olympian Hall (BACK) | 63.9 | 40.48344 | -106.83812 | 6729 | 2051 | crew + pacer | Sat 03:50 |
| 12 | Dry Lake (BACK) | 70.8 | 40.53448 | -106.78444 | 8307 | 2532 | crew + pacer | Sat 06:35 |
| 13 | Billy's Rabbit Hole (BACK) | 76.6 | 40.52082 | -106.72644 | 10030 | 3057 | none, minimal aid | Sat 08:49 |
| 14 | Summit Lake (BACK) | 80.8 | 40.54174 | -106.68394 | 10348 | 3154 | crew + pacer | Sat 10:37 |
| 15 | Long Lake (BACK) | 89.0 | 40.47644 | -106.68385 | 9911 | 3021 | none | Sat 13:17 |
| 16 | Mt Werner (BACK) | 95.8 | 40.45317 | -106.74669 | 10354 | 3156 | none | Sat 15:41 |
| 17 | Finish | 101.8 | 40.45969 | -106.79994 | 7142 | 2177 | crew | Sat 17:00 |

Course high point on the GPX is 10,587 ft at mile 80.9, just past Summit Lake on the return. Low point is 6,729 ft at Olympian Hall (BACK).

---

## 3. Why the town forecast is wrong by two layers of clothing

Same hours, live data, 2026-09-03. Town = Steamboat Springs at 6,736 ft. Summit = Summit Lake return at 10,571 ft, requested with its true elevation.

| Hour | Town temp | Town feels-like | Town wind | Summit temp | Summit feels-like | Summit wind | Feels-like gap |
|---|---|---|---|---|---|---|---|
| 00:00 | 57.0 | 50.8 | 10 mph | 44.1 | 32.4 | 19 mph | -18.4°F |
| 04:00 | 55.6 | 49.7 | 10 | 44.0 | 30.9 | 23 | -18.8°F |
| 08:00 | 57.0 | 53.9 | 2 | 44.1 | 28.1 | 30 | **-25.8°F** |
| 12:00 | 75.4 | 68.8 | 13 | 55.8 | 44.9 | 22 | -23.9°F |
| 16:00 | 79.9 | 71.2 | 14 | 60.9 | 49.7 | 19 | -21.5°F |
| 20:00 | 69.4 | 62.6 | 5 | 52.4 | 43.6 | 9 | -19.0°F |

Two things drive the gap: about 4°F per 1,000 ft of temperature lapse, and wind that roughly doubles above treeline. Feels-like compounds both.

**2023 translation.** The town station's 34°F dawn low, projected to 10,000 ft with the overnight lapse rates observed on this course (3.0 to 3.4°F per 1,000 ft), is roughly **23 to 24°F** on the high sections. That is an estimate, but it is the right order of magnitude for what the ridge was doing while the dashboard said 34.

---

## 4. Which forecast source, and why

| Source | Per-point elevation you can set | Resolution at Steamboat | Adjusts temp / feels-like / wind | Key / cost | Verdict |
|---|---|---|---|---|---|
| **Open-Meteo** | **Yes, to the foot** | HRRR 3 km for about 48 h, then GFS 13 km, all with elevation downscaling | **All three (verified)** | None, free | **Use this** |
| NWS api.weather.gov | No | 2.5 km NDFD, forecaster-edited | temp, feels-like, wind, gust, PoP, snow | None, free, needs User-Agent header | Optional second opinion |
| Google WeatherNext 3 via Maps Platform Weather API | **No** (parameters are location, unitsSystem, pageSize, pageToken, hours, languageCode) | Station head 5 km on its own DEM; wind and precip 10 km | Fixed to its internal DEM | API key + billing; 10,000 calls/month free then $0.15 per 1,000 | Not for this race |
| meteoblue point+ | Yes, 30 m downscaling | Proprietary multi-model | All | Paid | Only if paying is fine |

**Why Google is out despite being the newest model (released 2026-09-03).** WeatherNext 3 is elevation-aware internally, but only through its own roughly 5 km elevation grid, and the public endpoint gives you no way to say "this point is at 10,348 ft." With 3,858 ft of relief on this course, control over elevation matters more than model skill. Its hourly forecast is also paginated 24 hours per call, so a 48 hour pull is 2 billed calls per point. Revisit it for a flatter race or for its 15 day horizon.

**Open-Meteo's `best_match` at Steamboat.** Observed to equal the `gfs_hrrr` model for the first ~48 to 54 hours and `gfs_seamless` after that (identical values at hours 47, 49 and 96). HRRR is the standard model for Rocky Mountain forecasting. Do not pass `models=`; let `best_match` do this.

---

## 5. The single API call

### Production URL (all 17 aid stations, exact elevations, one request)

```
https://api.open-meteo.com/v1/forecast
  ?latitude=40.45954,40.45322,40.48242,40.47656,40.54174,40.52056,40.53480,40.48324,40.46074,40.46085,40.48344,40.53448,40.52082,40.54174,40.47644,40.45317,40.45969
  &longitude=-106.80069,-106.74687,-106.78127,-106.68395,-106.68400,-106.72641,-106.78423,-106.83818,-106.85557,-106.85584,-106.83812,-106.78444,-106.72644,-106.68394,-106.68385,-106.74669,-106.79994
  &elevation=2154,3157,2285,3022,3153,3067,2537,2052,2503,2494,2051,2532,3057,3154,3021,3156,2177
  &hourly=temperature_2m,apparent_temperature,relative_humidity_2m,dew_point_2m,wind_speed_10m,wind_gusts_10m,wind_direction_10m,precipitation_probability,precipitation,rain,showers,snowfall,freezing_level_height,cloud_cover,shortwave_radiation,weather_code
  &daily=sunrise,sunset
  &temperature_unit=fahrenheit
  &wind_speed_unit=mph
  &precipitation_unit=inch
  &timezone=America/Denver
  &forecast_days=3
```

(Line breaks added for readability; send it as one line, about 1,000 characters.)

### Parameter notes

- `latitude`, `longitude`, `elevation` are comma-separated lists of equal length, one entry per aid station. `elevation` is in **meters**. The response is a JSON **array** of 17 location objects in the same order.
- `elevation` is the whole point. Open-Meteo's default already uses a 90 m DEM and resolved our points to within a few feet, but passing it explicitly guarantees the trail point and keeps the chart internally consistent with the GPX. Never pass `elevation=nan` (that disables downscaling and uses the grid-cell average).
- `timezone=America/Denver` makes every time string local (MDT). The strings have **no offset suffix**, e.g. `2026-09-18T19:00`. Parse them as local Steamboat time; do not feed them to `new Date()` on a machine in another zone without appending `-06:00`.
- `forecast_days` up to 16. For race week use `forecast_days=3` or, once inside the horizon, `start_date=2026-09-18&end_date=2026-09-19`. If you get **HTTP 400 "end_date is out of allowed range"**, the date is beyond the 16 day horizon; today's horizon ends Sept 18 23:00, so Sept 19 becomes requestable on Sept 4.
- `daily=sunrise,sunset` comes back in the same call. Use it for the night shading; do not hardcode.

### Response shape (per location object)

```json
{
  "latitude": 40.54, "longitude": -106.68, "elevation": 3153.0,
  "timezone": "America/Denver", "utc_offset_seconds": -21600,
  "hourly_units": { "temperature_2m": "°F", "wind_speed_10m": "mp/h", "precipitation": "inch", "snowfall": "inch", "freezing_level_height": "ft", "weather_code": "wmo code" },
  "hourly": {
    "time": ["2026-09-18T00:00", "..."],
    "temperature_2m": [44.1, "..."],
    "apparent_temperature": [32.3, "..."],
    "wind_speed_10m": [19.2, "..."], "wind_gusts_10m": [28.4, "..."], "wind_direction_10m": [230, "..."],
    "precipitation_probability": [0, "..."], "precipitation": [0.0, "..."], "snowfall": [0.0, "..."],
    "freezing_level_height": [14400, "..."], "weather_code": [0, "..."]
  },
  "daily": { "time": ["2026-09-18"], "sunrise": ["2026-09-18T06:51"], "sunset": ["2026-09-18T19:11"] }
}
```

Units follow the unit parameters: with `temperature_unit=fahrenheit` the freezing level comes back in **feet**; with `precipitation_unit=inch` snowfall comes back in **inches** (Open-Meteo's default is cm, and its docs note water equivalent in mm = cm / 7). Check `hourly_units` at runtime rather than assuming.

### Size, caching, refresh

- 17 points x 72 hours x 16 variables is about 110 KB. 16 days is about 700 KB. Keep the window tight.
- Call it from the browser directly (no key to protect), cache in `localStorage` with a 30 to 60 minute TTL. HRRR updates hourly, so nothing is gained by refreshing faster.
- Free tier limits: 10,000 calls/day, 5,000/hour, 600/minute per IP. A page load is one call. Race-day crew traffic will not come close.

### When the forecast is worth looking at

| Date | What you have |
|---|---|
| Sept 4 to 10 | Race window enters the 16 day horizon. GFS at 8 to 14 days. Pattern only: "cold front vs high pressure." Do not show hourly detail as fact. |
| Sept 11 to 15 | 3 to 7 day range. Temperatures and precipitation windows become meaningful. Good time to make drop-bag decisions. |
| Sept 16 evening onward | HRRR 3 km covers the whole race. Hourly detail, gusts and precipitation timing are now real. Refresh hourly. |
| Race day | HRRR re-initializes every hour. The dashboard should refetch on load and every 60 minutes. |

---

## 6. Metric by metric

### Temperature (`temperature_2m`)

- Lapse-adjusted to the requested elevation. Verified swing of 15.3°F across 3,842 ft at one lat/lon.
- **Observed lapse rates on this course** (fitted per hour across all 17 aid points, 2026-09-03): **3.0 to 3.4°F per 1,000 ft overnight, 4.2 to 5.1°F per 1,000 ft in the afternoon.** Textbook standard is 3.57°F per 1,000 ft. Daytime is steeper because the sun heats the valleys more than the ridges; night is shallower and can invert (valley colder than ridge) under clear calm skies. **Fit the lapse rate from the data each hour; do not hardcode 3.5.**
- Show temperature as a whole number. Model error at this range is a few degrees; decimals are false precision.

### Feels-like (`apparent_temperature`)

- Open-Meteo defines it as "the perceived feels-like temperature combining wind chill factor, relative humidity and solar radiation." It is already computed at the requested elevation with the adjusted wind. Verified swing of 20.4°F across the same 3,842 ft.
- **Use it as returned. Do not recompute wind chill or heat index yourself** from the adjusted temperature; you would double-count the wind and lose the radiation term, which matters above treeline in September sun.
- This is the headline number for clothing and drop-bag decisions. Lead with it; show air temperature second.

### Wind (`wind_speed_10m`, `wind_gusts_10m`, `wind_direction_10m`)

- Surface wind at 10 m above ground, adjusted with elevation: verified 11.3 mph in the valley vs 19.2 mph at the summit for the same lat/lon, gusts 18.8 vs 28.4. The mechanism is Open-Meteo's statistical downscaling; it is observed behavior, not a documented formula.
- Gusts are the max of the preceding hour. **Gusts, not sustained wind, are what knock a tired runner around on the Summit Lake and Mt Werner ridgelines.** Show both, lead with gust when it exceeds about 25 mph.
- Direction is degrees the wind comes **from** (230 = from the southwest). Useful for the tooltip ("headwind on the climb to Werner").
- Optional upper bound for exposed ridge sections: add `wind_speed_700hPa,geopotential_height_700hPa` to the request. The 700 hPa surface sat at about 10,300 ft over Steamboat on the test day, almost exactly the course high points, and its wind was 30 to 35 mph while the downscaled surface wind read 19 to 30. Free-air wind is the "if you are fully exposed" ceiling. **Do not use `temperature_700hPa` as the ridge temperature**; free-air temperature at that height ran about 7°F warmer than the downscaled surface value in testing and they are different physical quantities.

### Precipitation

- `precipitation_probability`: "Probability of precipitation with more than 0.1 mm of the preceding hour. Probability is based on ensemble weather models with 0.25° (~27 km) resolution." **This is the only coarse, non-elevation-aware field in the set.** Treat it as "chance of any wet hour in this area," not as ridge-specific.
- `precipitation`: total of the preceding hour, in inches (with the unit param), from the high-resolution model at the requested elevation. This is the field to trust for **how much**. Add `rain`, `showers`, `snowfall` for type.
- `snowfall`: preceding hour, inches with the unit param. Any nonzero value at a 10,000 ft aid station in the race window is a drop-bag-changing fact.
- `freezing_level_height`: altitude of the 0°C level. Compare it to the course high point (10,587 ft). On the test day it was about 14,300 ft (no freeze anywhere); in a September cold front it can drop below 10,000 ft overnight, which turns rain into snow on Summit Lake while it rains in town.
- `weather_code` (WMO): 0 clear, 1 to 3 mainly clear to overcast, 45/48 fog, 51 to 57 drizzle, 61 to 67 rain (light/moderate/heavy, 66/67 freezing), 71 to 77 snow, 80 to 82 rain showers, 85/86 snow showers, 95 thunderstorm, 96/99 thunderstorm with hail. Use it for the icon, not for decisions.
- Timing convention: every hourly value describes the **hour ending at** that timestamp (the "preceding hour"). A 0.12 inch value at 15:00 means it fell between 14:00 and 15:00.

### Humidity, cloud, sun (`relative_humidity_2m`, `dew_point_2m`, `cloud_cover`, `shortwave_radiation`)

- Secondary. Dew point close to air temperature overnight means fog or frost on the high meadows. `shortwave_radiation` in W/m² is why a 50°F ridge feels fine at noon and brutal at 3 AM; it is already inside `apparent_temperature`.

---

## 7. Weather at any point on the course (not just aid stations)

The course is 2,037 GPX points at 0.05 mi spacing, each with elevation. Forecasts exist for 17 aid stations. To get weather for mile 73.4 at 07:40:

1. **Time.** Linearly interpolate each metric between the two bracketing hours at each aid station.
2. **Space.** Find the two aid stations bracketing that mile along the course (here Dry Lake BACK at 70.8 and Billy's BACK at 76.6) and interpolate by fraction of distance.
3. **Elevation correction.** The interpolated value sits at the interpolated elevation; correct to the true GPX elevation using **that hour's fitted lapse rate**: regress `temperature_2m` against elevation across all 17 aid stations for that hour, take the slope, apply `T_point = T_interp + slope * (elev_point - elev_interp)`. Do the same regression separately for `apparent_temperature`; do not derive it.
4. Wind and precipitation: interpolate in time and space only. Do not lapse-correct them.

Minimal per-hour lapse fit (JavaScript):

```js
// locs = the 17 location objects from Open-Meteo; h = hour index
function lapseSlope(locs, h, field = "temperature_2m") {
  const xs = locs.map(l => l.elevation / 0.3048);          // ft
  const ys = locs.map(l => l.hourly[field][h]);
  const mx = xs.reduce((a, b) => a + b) / xs.length;
  const my = ys.reduce((a, b) => a + b) / ys.length;
  let num = 0, den = 0;
  for (let i = 0; i < xs.length; i++) { num += (xs[i] - mx) * (ys[i] - my); den += (xs[i] - mx) ** 2; }
  return num / den;                                        // °F per ft (negative = colder aloft)
}
```

A positive slope on a night hour is an inversion: the valley is colder than the ridge. Show it; it changes where the cold problem is.

---

## 8. Derived callouts worth computing

These are the three or four numbers a crew actually acts on. Compute them from the forecast joined to the **live** arrival plan.

1. **Coldest feels-like moment on her schedule**: minimum `apparent_temperature` across (aid station, planned arrival hour) pairs, with where and when. Extend to the interpolated course points if you have them.
2. **Freezing level vs course high point**: lowest `freezing_level_height` in the race window, compared with 10,587 ft. If it drops below about 10,500 ft, flag "snow possible above Summit Lake" with the hours.
3. **Max gust on exposed sections**: highest `wind_gusts_10m` at Mt Werner, Long Lake, Summit Lake, Billy's during her planned hours there.
4. **Wet windows**: contiguous hours with `precipitation` above about 0.02 in at any aid station, with type from `snowfall` vs `rain`. Report as "rain 22:00 to 01:00 at Dry Lake through Olympian," not as a probability.
5. **Town vs course delta**: for the hero stat, the same-hour gap between the Steamboat town forecast and the coldest course point. That single number tells everyone why this panel exists.

---

## 9. Danger windows on the current 32:00 plan

Recompute from the live plan; these follow Tyler's arrivals as of 2026-09-03.

- **Fri 19:00 to 20:14, Summit Lake OUT to Billy's OUT (10,344 to 10,062 ft).** Sunset is 19:11. She is at 10,000 ft for the first hour of darkness, the radiative cooling hour. This is the first place the feels-like number matters.
- **Sat 00:24 to 03:50, the Emerald Mountain loop (6,732 to 8,212 ft).** Where 2023 broke. Town-level temperatures but the daily minimum is approaching, and it is the deep-night low-energy stretch.
- **Sat 03:50 to 08:49, Olympian Hall BACK to Billy's BACK.** 3,300 ft of climbing from the valley floor through the diurnal minimum (coldest hour is typically just after sunrise, 06:52) to arrive at 10,030 ft two hours after dawn, when the ridge is still near its overnight low and she has been moving for 24 hours. **This is the highest-risk block of the race for cold.** Dry Lake BACK at 06:35 (crew + pacer allowed) is the last chance to add layers before it.
- **Sat 10:37, Summit Lake BACK (10,348 ft), the high point.** By now the risk flips from cold to exposure: midday ridge wind and sun. Gust and UV matter here.
- If she is on a 36 hour trajectory instead, every back-half block shifts about 3 to 4 hours later, which moves the Billy's BACK arrival toward midday and pushes the finish toward dusk. The chart must follow the live plan.

---

## 10. Optional NWS cross-check (free, US only)

Two calls, both need a `User-Agent` header identifying the app:

```
GET https://api.weather.gov/points/40.5417,-106.6840        -> properties.forecastHourly, properties.forecastGridData
GET https://api.weather.gov/gridpoints/BOU/8,102/forecast/hourly
```

Hourly periods carry `temperature` (°F), `windSpeed` ("17 mph"), `windDirection`, `probabilityOfPrecipitation.value`, `relativeHumidity`, `dewpoint`, `shortForecast`. The grid endpoint adds `apparentTemperature`, `windGust`, `snowfallAmount` in SI. The BOU grid cell for the Summit Lake area reports its own elevation as 10,233 ft, within a couple hundred feet of the aid station, but there is no way to override it. Use NWS as a second line on the chart or a "NWS says" tooltip, not as the primary source.

---

## 11. Gotchas

- **HTTP 400 on `start_date`/`end_date`**: the date is beyond the 16 day horizon. Use `forecast_days` until the race is inside the window.
- **Times have no UTC offset.** `2026-09-18T19:00` is local MDT. Append `-06:00` before constructing a Date object.
- **Nulls appear** in model-specific requests beyond that model's horizon (HRRR stops around hour 54). Stay on `best_match` and this does not happen.
- **Units labels**: wind comes back labeled `mp/h`; freezing level switches to `ft` with Fahrenheit; snowfall switches to `inch` with `precipitation_unit=inch`. Read `hourly_units`.
- **The multi-location response is an array, not an object.** A single-location request returns an object. Handle both if the aid list can shrink to one.
- **Ensemble spread is not free.** Open-Meteo's ensemble API requires the paid Professional plan. If probability cones are wanted later, that is the cost, or the Google WeatherNext raw data (BigQuery, allowlist form) provides a 64 member ensemble.
- **Attribution.** Open-Meteo data is CC BY 4.0. Put "Weather data by Open-Meteo.com" with a link in the footer. Free tier is for non-commercial use; a personal race tracker qualifies.
- **Aid coordinates**: there are two natural positions, the official mile marker and where the station physically sits on the GPX. The table in section 2 uses the physical positions from the snapped GPX file. Differences are a few hundred feet and a few tens of feet of elevation; either is fine, but be consistent.

---

## 12. What not to do

- Do not show Steamboat Springs town weather anywhere on the course panel.
- Do not apply a fixed 3.5°F per 1,000 ft to a town forecast and call it a summit forecast. Request the summit elevation directly.
- Do not recompute feels-like from adjusted temperature and wind.
- Do not present `precipitation_probability` as ridge-specific or as "how much."
- Do not use `temperature_700hPa` as a surface temperature.
- Do not hardcode arrival times, sunrise or sunset. Read arrivals from the plan and sun times from the same API call.
- Do not use decimals on temperature or wind.

---

## 13. Illustrative sample (2026-09-03 data mapped onto the 32:00 plan clock hours)

Not a race forecast. Shows the shape of what the panel will display and the size of the elevation effect on an ordinary September day.

| Aid (pass) | Mile | Elev ft | Plan arrival | Temp °F | Feels °F | Wind / gust mph | Precip % |
|---|---|---|---|---|---|---|---|
| Steamboat Base (start) | 0.0 | 7067 | Fri 09:00 | 62 | 57 | 6 / 15 | 0 |
| Mt Werner (OUT) | 5.4 | 10358 | Fri 10:30 | 53 | 41 | 19 / 33 | 0 |
| Fish Creek Falls (OUT) | 17.7 | 7497 | Fri 13:06 | 73 | 65 | 16 / 24 | 0 |
| Long Lake (OUT) | 24.3 | 9915 | Fri 16:35 | 64 | 55 | 16 / 26 | 0 |
| Summit Lake (OUT) | 30.1 | 10344 | Fri 19:00 | 59 | 48 | 12 / 20 | 0 |
| Billy's Rabbit Hole (OUT) | 34.3 | 10062 | Fri 20:14 | 55 | 48 | 6 / 8 | 0 |
| Dry Lake (OUT) | 44.5 | 8323 | Fri 22:33 | 59 | 51 | 8 / 12 | 0 |
| Olympian Hall (OUT) | 51.2 | 6732 | Sat 00:24 | 63 | 54 | 8 / 10 | 0 |
| Lane of Pain (1st) | 54.4 | 8212 | Sat 01:25 | 60 | 51 | 10 / 13 | 0 |
| Lane of Pain (2nd) | 58.1 | 8182 | Sat 02:21 | 60 | 51 | 10 / 13 | 1 |
| Olympian Hall (BACK) | 63.9 | 6729 | Sat 03:50 | 61 | 53 | 9 / 10 | 1 |
| Dry Lake (BACK) | 70.8 | 8307 | Sat 06:35 | 54 | 47 | 7 / 10 | 1 |
| Billy's Rabbit Hole (BACK) | 76.6 | 10030 | Sat 08:49 | 52 | 43 | 12 / 19 | 1 |
| Summit Lake (BACK) | 80.8 | 10348 | Sat 10:37 | 54 | 44 | 17 / 29 | 1 |
| Long Lake (BACK) | 89.0 | 9911 | Sat 13:17 | 64 | 56 | 19 / 26 | 1 |
| Mt Werner (BACK) | 95.8 | 10354 | Sat 15:41 | 62 | 52 | 16 / 22 | 7 |
| Finish | 101.8 | 7142 | Sat 17:00 | 79 | 71 | 13 / 17 | 8 |

Even on this mild day: 41°F feels-like at Mt Werner 90 minutes after a 57°F start, and a 27°F feels-like spread between the finish line and Summit Lake on the same afternoon.

---

## 14. Sources

- Open-Meteo forecast API docs: https://open-meteo.com/en/docs (variable definitions quoted in section 6)
- Open-Meteo pricing and limits: https://open-meteo.com/en/pricing
- NWS API: https://www.weather.gov/documentation/services-web-api
- Google Maps Platform Weather API reference (hourly): https://developers.google.com/maps/documentation/weather/reference/rest/v1/forecast.hours/lookup
- Google Maps Platform pricing (Weather Usage SKU): https://developers.google.com/maps/billing-and-pricing/pricing
- WeatherNext 3 model guide: https://developers.google.com/weathernext/guides/models
- WeatherNext 3 paper (Rasp et al., 2026): https://storage.googleapis.com/deepmind-media/papers/weathernext_3.pdf
- RRR 2026 Runner's Manual aid station table, via Tyler's dashboard: https://myrecoverysteps.com/rrrr
- Course GPX and snapped aid coordinates: Trailhead Projects/RRR100/ (RRR100_course.gpx, rrr_aid_snapped.json)

*Prepared 2026-09-03 for Shannon's Run Rabbit Run 100 build. Verified against live APIs on that date.*
