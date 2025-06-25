# ✈️ Flight Search Assessment

This is a flight search web application built as part of a frontend technical assessment.

## 🧩 Features

- Search for flights using mocked data
- Search for flights using a live API [Sky scrapper]
- Select origin and destination airports from suggestions
- Choose a travel date using a date picker
- View matching flight options with airline, price, duration, and stop details
- Mobile responsive layout

## 🔀 Live API Note

> The application was originally built to use the [SkyScraper API](https://rapidapi.com/skyscanner/api/skyscanner-flight-search), but due to quota limitations on the free plan, mocked data is currently used for both airport suggestions and flight results.

Live API code is still in the codebase (commented out) in a separate component (`FlightContent.tsx`), and can be re-enabled by swapping it with the mocked version.

## 🧪 Tech Stack

- React + TypeScript
- SCSS Modules
- Axios
- React DatePicker
- Vite

## 🛠 Setup Instructions

```bash
# clone the repo
git clone https://github.com/vawkei/flight-search-assessment

# install dependencies
cd flight-search-assessment
npm install

# run the app
npm run dev
