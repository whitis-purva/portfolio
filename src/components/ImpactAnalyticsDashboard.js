const FUNNEL_PERCENT = 72.73;
const RING_RADIUS = 44;
const RING_CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;
const RING_OFFSET = RING_CIRCUMFERENCE - (FUNNEL_PERCENT / 100) * RING_CIRCUMFERENCE;
const RING_SIZE = RING_RADIUS * 2 + 16;

const TESTIMONIALS = [
  "Very easy to evaluate and make an offer.",
  "Really easy to determine my level of interest in a deal quickly.",
];

export default function ImpactAnalyticsDashboard() {
  return (
    <div className="impact-dashboard" role="region" aria-label="Impact analytics">
      <div className="impact-dashboard__telemetry">
        <header className="impact-panel__header">
          <h3 className="impact-panel__title">Conversion metrics</h3>
        </header>

        <div className="impact-viz impact-viz--velocity">
          <div className="impact-duration-compare">
            <div className="impact-duration-compare__step">
              <p className="impact-duration-compare__label">Previous median</p>
              <p className="impact-duration-compare__value impact-duration-compare__value--legacy">3m 19s</p>
            </div>
            <div className="impact-duration-compare__arrow" aria-hidden="true">→</div>
            <div className="impact-duration-compare__step">
              <p className="impact-duration-compare__label">Optimized median</p>
              <div className="impact-duration-compare__value-row">
                <p className="impact-duration-compare__value">2m 57s</p>
                <span className="impact-badge impact-badge--positive" aria-label="11 percent faster">
                  <span aria-hidden="true">▼</span> 11%
                </span>
              </div>
            </div>
          </div>
          <p className="impact-viz__caption">Median time to convert optimized to 2m 57s</p>
        </div>

        <div className="impact-viz impact-viz--funnel">
          <div className="impact-viz__row impact-viz__row--funnel">
            <div className="impact-funnel-ring">
              <svg className="impact-funnel-ring__svg" viewBox={`0 0 ${RING_SIZE} ${RING_SIZE}`}>
                <circle
                  className="impact-funnel-ring__track"
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  strokeWidth="9"
                />
                <circle
                  className="impact-funnel-ring__fill"
                  cx={RING_SIZE / 2}
                  cy={RING_SIZE / 2}
                  r={RING_RADIUS}
                  fill="none"
                  strokeWidth="9"
                  strokeDasharray={RING_CIRCUMFERENCE}
                  strokeDashoffset={RING_OFFSET}
                  transform={`rotate(-90 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
                />
              </svg>
              <p className="impact-funnel-ring__label">{FUNNEL_PERCENT}%</p>
            </div>
            <div className="impact-funnel-stat">
              <p className="impact-funnel-stat__title">Funnel conversion</p>
              <span className="impact-badge impact-badge--positive" aria-label="2 percent increase">
                <span aria-hidden="true">▲</span> 2%
              </span>
              <p className="impact-funnel-stat__caption">More lenders are completing the full quoting workflow</p>
            </div>
          </div>
          <p className="impact-viz__caption">Funnel conversion rate after redesign</p>
        </div>

        <div className="impact-viz impact-viz--engagement">
          <div className="impact-engagement-split">
            <div className="impact-engagement-block">
              <p className="impact-engagement-block__value">+25%</p>
              <p className="impact-engagement-block__label">All-Time Record Unique Terms Quoted</p>
            </div>
            <div className="impact-engagement-block">
              <p className="impact-engagement-block__value">
                333 <span className="impact-engagement-block__unit">Active Events</span>
              </p>
              <span className="impact-pill">+35.4% YoY</span>
            </div>
          </div>
        </div>
      </div>

      <aside className="impact-dashboard__voice">
        <header className="impact-panel__header">
          <h3 className="impact-panel__title">User voice &amp; satisfaction</h3>
        </header>

        <div className="impact-scorecard">
          <p className="impact-scorecard__value">92%</p>
          <div className="impact-scorecard__stars" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={`impact-star${star <= 4 ? " impact-star--filled" : " impact-star--partial"}`}>
                ★
              </span>
            ))}
          </div>
          <div className="impact-scorecard__bar" role="img" aria-label="92 percent satisfaction">
            <div className="impact-scorecard__bar-fill" style={{ width: "92%" }} />
          </div>
          <p className="impact-scorecard__label">
            <strong className="font-semibold text-text-primary">92% of verified users</strong>{" "}
            explicitly confirmed that the new interface made it significantly faster and easier to accurately evaluate a deal.
          </p>
        </div>

        <div className="impact-testimonials">
          {TESTIMONIALS.map((quote) => (
            <figure key={quote} className="impact-testimonial">
              <blockquote className="impact-testimonial__quote">&ldquo;{quote}&rdquo;</blockquote>
            </figure>
          ))}
        </div>
      </aside>
    </div>
  );
}
