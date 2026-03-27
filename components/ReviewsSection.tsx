import { reviews, BRAND } from "@/data/content";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-amber-400" : "text-cream-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="opinie" className="bg-cream-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
            Opinie klientów
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink mt-3 mb-6">
            Co mówią
            <br />
            <span className="text-pink-500">nasi klienci</span>
          </h2>

          {/* Rating badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-cream-200">
              <div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <span className="font-bold text-ink text-xl">{BRAND.stats.googleRating}</span>
                </div>
                <StarRating rating={5} />
              </div>
              <div className="text-left pl-3 border-l border-cream-200">
                <p className="text-xs text-muted font-medium">Google</p>
                <p className="text-xs text-muted">opinie</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white rounded-2xl px-6 py-4 shadow-sm border border-cream-200">
              <div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span className="font-bold text-ink text-xl">{BRAND.stats.facebookRating}</span>
                </div>
                <StarRating rating={5} />
              </div>
              <div className="text-left pl-3 border-l border-cream-200">
                <p className="text-xs text-muted font-medium">Facebook</p>
                <p className="text-xs text-muted">ocena</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-cream-200 flex flex-col"
            >
              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="text-slate text-sm leading-relaxed mt-4 flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-cream-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-ink">{review.name}</p>
                  {review.location && (
                    <p className="text-xs text-muted">{review.location}</p>
                  )}
                </div>
                <div className="text-xs text-muted bg-cream-100 px-2 py-1 rounded-full capitalize">
                  {review.source}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
