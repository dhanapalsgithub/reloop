# SESSION_JOURNAL.md (rotated - earlier entries trimmed)

/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:57:26.821Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 06:57:28.529Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pricing Manager"}

## 2026-09-11 06:57:34.708Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Partner Management"}

## 2026-09-11 06:57:36.839Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"User Management"}

## 2026-09-11 06:57:38.955Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment & Payouts"}

## 2026-09-11 06:57:39.065Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=admin&email=test33@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 105

## 2026-09-11 06:57:39.066Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=admin&email=test33@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 06:57:40.326Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Reports"}

## 2026-09-11 06:57:43.686Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 06:57:43.700Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/compliance
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/scrap/compliance</pre>
    </body>
    </html>
    
- durationMs: 10

## 2026-09-11 06:57:43.700Z console.error
- text: 
    Error fetching compliance: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at http://localhost:3000/src/components/scrap/ComplianceReport.jsx:13:75

## 2026-09-11 06:57:48.288Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"System Setting"}

## 2026-09-11 06:57:51.527Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 06:57:51.537Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/compliance
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/scrap/compliance</pre>
    </body>
    </html>
    
- durationMs: 8

## 2026-09-11 06:57:51.537Z console.error
- text: 
    Error fetching compliance: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at http://localhost:3000/src/components/scrap/ComplianceReport.jsx:13:75

## 2026-09-11 06:57:53.046Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"User Management"}

## 2026-09-11 06:57:54.538Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Partner Management"}

## 2026-09-11 06:57:56.416Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 06:57:56.693Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:57:56.694Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:57:56.694Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:57:56.694Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:57:56.694Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:57:56.695Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:57:56.695Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:06.431Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:06.431Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:06.431Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:06.431Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:06.432Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:06.432Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:06.432Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:06.849Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 06:58:06.961Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 06:58:06.962Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 06:58:06.963Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 06:58:06.963Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 06:58:06.963Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 06:58:06.963Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 06:58:08.052Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 06:58:08.272Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 06:58:09.540Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 06:58:09.541Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 06:58:09.544Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 06:58:09.545Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 06:58:10.895Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 06:58:11.113Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 06:58:11.114Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 06:58:11.239Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:13.436Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 06:58:13.464Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:14.937Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 06:58:18.971Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 06:58:19.006Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 06:58:26.063Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:00:15.604Z load
- url: http://localhost:3000/

## 2026-09-11 07:00:17.493Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:00:17.498Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:00:17.498Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:00:17.498Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:00:17.500Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:00:17.501Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:00:17.707Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:00:17.709Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:00:17.981Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110008784:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:00:20.752Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:01:00.336Z load
- url: http://localhost:3000/

## 2026-09-11 07:01:02.256Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:01:02.259Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:01:02.259Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:01:02.259Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:01:02.261Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:01:02.261Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:01:02.475Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:01:02.476Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:01:02.696Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110008784:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:01:04.697Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:01:05.099Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:01:06.707Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:01:06.730Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110008784:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:01:08.160Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:01:09.132Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:01:09.160Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 21

## 2026-09-11 07:01:09.161Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:01:10.626Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:02:12.559Z load
- url: http://localhost:3000/

## 2026-09-11 07:02:14.511Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:02:14.515Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:02:14.515Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:02:14.515Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:02:14.517Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:02:14.517Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:02:14.735Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:02:14.736Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:02:14.965Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110127988:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:02:16.792Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:02:16.823Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 24

## 2026-09-11 07:02:16.824Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:02:17.807Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:02:17.920Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110127988:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:02:19.052Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:02:20.856Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:02:20.872Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 12

## 2026-09-11 07:02:20.872Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:02:26.025Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:02:26.131Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110127988:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:02:30.655Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110149871:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:02:31.878Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:02:31.895Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 11

## 2026-09-11 07:02:31.895Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:02:33.655Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:02:33.758Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110149871:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:02:35.167Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:02:35.177Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 8

## 2026-09-11 07:02:35.177Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:02:41.457Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:02:41.559Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110149871:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:02:45.381Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:02:45.397Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 10

## 2026-09-11 07:02:45.397Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:02:52.168Z load
- url: http://localhost:3000/

## 2026-09-11 07:02:54.015Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:02:54.018Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:02:54.018Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:02:54.018Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:02:54.020Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:02:54.020Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:02:54.229Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:02:54.231Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:02:54.455Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110149871:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:02:56.928Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:03:00.141Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:03:00.153Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 8

## 2026-09-11 07:03:00.153Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:03:02.264Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:03:04.199Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:03:04.258Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110149871:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:03:06.357Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:03:07.512Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:03:07.525Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110149871:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:03:08.994Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:03:08.997Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110149871:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:03:10.774Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:03:10.787Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 9

## 2026-09-11 07:03:10.788Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=public&email=test29@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:03:13.633Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 07:03:13.744Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:03:13.746Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:03:13.746Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:03:13.746Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:03:13.747Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:03:13.747Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:03:14.826Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:03:15.045Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:03:16.253Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:03:16.254Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 07:03:16.256Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:03:16.256Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:03:17.673Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:03:17.903Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:03:17.904Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:03:18.130Z console.error
- text: 
    Warning: Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.%s Chennai 
        at tbody
        at table
        at div
        at div
        at AreaManagementView (http://localhost:3000/src/components/scrap/RealPickupsList.jsx:5:46)
        at div
        at main
        at div
        at HomePage (http://localhost:3000/src/pages/HomePage.jsx?t=1789110149871:20:33)
        at RenderedRoute (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:6647:26)
        at Routes (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7572:3)
        at Router (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:7511:13)
        at BrowserRouter (http://localhost:3000/node_modules/.vite/deps/react-router-dom.js?v=c806b173:10816:3)
        at App

## 2026-09-11 07:03:19.275Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:03:19.295Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 15

## 2026-09-11 07:03:19.295Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:03:34.912Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 91

## 2026-09-11 07:03:34.915Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:03:44.888Z load
- url: http://localhost:3000/

## 2026-09-11 07:03:46.287Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:03:46.290Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:03:46.290Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:03:46.290Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:03:46.293Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:03:46.293Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:03:46.502Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:03:46.504Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:03:48.376Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:03:48.387Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 7

## 2026-09-11 07:03:48.387Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:03:49.968Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:03:51.822Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:03:53.685Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:03:54.989Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:03:55.004Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 9

## 2026-09-11 07:03:55.004Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:03:56.804Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:03:58.909Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:04:11.081Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:04:11.180Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 94

## 2026-09-11 07:04:11.180Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:04:15.263Z load
- url: http://localhost:3000/

## 2026-09-11 07:04:17.265Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:04:17.268Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:04:17.268Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:04:17.268Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:04:17.269Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:04:17.269Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:04:17.481Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:04:17.483Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:04:20.605Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:04:20.618Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 8

## 2026-09-11 07:04:20.618Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:04:50.599Z load
- url: http://localhost:3000/

## 2026-09-11 07:04:56.602Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:04:56.605Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:04:56.605Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:04:56.605Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:04:56.608Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:04:56.608Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:04:56.831Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:04:56.832Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:05:00.360Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:05:01.562Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:05:02.744Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:05:02.770Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 23

## 2026-09-11 07:05:02.770Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:05:04.076Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:05:05.682Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:05:07.035Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:05:08.812Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:05:08.840Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 24

## 2026-09-11 07:05:08.840Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:05:13.417Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"date","id":null,"placeholder":null,"label":"[date]","value":"","valueLength":0,"text":""}

## 2026-09-11 07:05:13.631Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"date","id":null,"placeholder":null,"label":"[date]","value":"","valueLength":0,"text":""}

## 2026-09-11 07:05:14.987Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"date","id":null,"placeholder":null,"label":"[date]","value":"","valueLength":0,"text":""}

## 2026-09-11 07:05:17.019Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"date","id":null,"placeholder":null,"label":"[date]","value":"2026-09-10","valueLength":10,"text":""}

## 2026-09-11 07:05:22.891Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"date","id":null,"placeholder":null,"label":"[date]","value":"2026-09-10","valueLength":10,"text":""}

## 2026-09-11 07:05:23.106Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:05:29.172Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:05:29.184Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 8

## 2026-09-11 07:05:29.184Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:05:35.193Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:05:38.950Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:05:38.967Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 13

## 2026-09-11 07:05:38.968Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:05:41.227Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":null,"placeholder":"Leave blank to keep current password","label":"Leave blank to keep current password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:05:41.456Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":null,"placeholder":"Leave blank to keep current password","label":"Leave blank to keep current password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:05:44.703Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Manage profile info, credentials, and live database regional hub scope allocation"}

## 2026-09-11 07:05:53.318Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:05:53.409Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 86

## 2026-09-11 07:05:53.409Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:06:08.775Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 190

## 2026-09-11 07:06:08.775Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:06:23.396Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 73

## 2026-09-11 07:06:23.396Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:06:29.558Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:06:33.122Z click
- element: {"tag":"td","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Mixed Paper"}

## 2026-09-11 07:10:45.902Z load
- url: http://localhost:3000/

## 2026-09-11 07:10:46.627Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 07:11:40.274Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:11:40.285Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:11:40.286Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:11:40.286Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:11:40.288Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:11:40.289Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:11:40.495Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:11:40.503Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:11:42.795Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:11:42.830Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 29

## 2026-09-11 07:11:42.831Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:11:45.756Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:13:50.412Z load
- url: http://localhost:3000/

## 2026-09-11 07:13:51.871Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:13:51.872Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:13:51.872Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:13:51.873Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:13:51.873Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:13:51.874Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:13:52.102Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:13:52.103Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:13:53.841Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:13:53.866Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 20

## 2026-09-11 07:13:53.866Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:14:09.684Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 88

## 2026-09-11 07:14:09.685Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:14:24.666Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 75

## 2026-09-11 07:14:24.666Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:14:39.701Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 107

## 2026-09-11 07:14:39.701Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:14:54.761Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 169

## 2026-09-11 07:14:54.762Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:15:09.699Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 91

## 2026-09-11 07:15:09.700Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:15:12.917Z load
- url: http://localhost:3000/

## 2026-09-11 07:15:14.604Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:15:14.607Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:15:14.607Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:15:14.608Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:15:14.609Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:15:14.609Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:15:14.821Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:15:14.823Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:15:16.839Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:15:16.854Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 9

## 2026-09-11 07:15:16.854Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:15:20.115Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:15:35.622Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:15:38.210Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:16:01.434Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:16:06.389Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:16:14.047Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:16:14.066Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 15

## 2026-09-11 07:16:14.067Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:16:15.326Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:16:17.447Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:16:18.885Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:16:18.904Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 14

## 2026-09-11 07:16:18.906Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:16:20.708Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:16:41.089Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:16:41.104Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 10

## 2026-09-11 07:16:41.104Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:16:43.911Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:16:46.566Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:16:46.580Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 12

## 2026-09-11 07:16:46.581Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:16:49.266Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:16:52.610Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:16:52.653Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 35

## 2026-09-11 07:16:52.653Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:16:54.607Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:17:06.891Z focus
- element: {"tag":"input","role":null,"ariaLabel":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:07.112Z click
- element: {"tag":"input","role":null,"ariaLabel":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:07.115Z change
- element: {"tag":"input","role":null,"ariaLabel":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:10.462Z blur
- element: {"tag":"input","role":null,"ariaLabel":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:10.462Z focus
- element: {"tag":"input","role":null,"ariaLabel":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:10.688Z click
- element: {"tag":"input","role":null,"ariaLabel":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:10.690Z change
- element: {"tag":"input","role":null,"ariaLabel":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:13.346Z blur
- element: {"tag":"input","role":null,"ariaLabel":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:13.346Z focus
- element: {"tag":"input","role":null,"ariaLabel":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:13.568Z click
- element: {"tag":"input","role":null,"ariaLabel":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:13.571Z change
- element: {"tag":"input","role":null,"ariaLabel":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:15.104Z blur
- element: {"tag":"input","role":null,"ariaLabel":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 335561c2-d749-4200-9e8a-24be566f43f9","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:15.104Z focus
- element: {"tag":"input","role":null,"ariaLabel":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:15.331Z click
- element: {"tag":"input","role":null,"ariaLabel":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:15.335Z change
- element: {"tag":"input","role":null,"ariaLabel":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:21.131Z blur
- element: {"tag":"input","role":null,"ariaLabel":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 6e1b04eb-abc2-4bd4-bc43-4f517e49cc40","value":"on","valueLength":2,"text":""}

## 2026-09-11 07:17:21.347Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:17:21.363Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 13

## 2026-09-11 07:17:21.363Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:17:24.494Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:17:26.853Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:17:26.879Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 22

## 2026-09-11 07:17:26.879Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:17:41.923Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 65

## 2026-09-11 07:17:41.923Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:17:56.971Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 100

## 2026-09-11 07:17:56.971Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:18:12.695Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 94

## 2026-09-11 07:18:12.695Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:18:27.691Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 100

## 2026-09-11 07:18:27.691Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:18:42.657Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 71

## 2026-09-11 07:18:42.658Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:18:57.719Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 121

## 2026-09-11 07:18:57.719Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:19:21.711Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"transactionId\" does not exist"}
- durationMs: 115

## 2026-09-11 07:19:21.712Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"transactionId\" does not exist"}

## 2026-09-11 07:20:21.696Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 111

## 2026-09-11 07:20:21.697Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:20:29.790Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 167

## 2026-09-11 07:20:29.791Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:20:34.103Z load
- url: http://localhost:3000/

## 2026-09-11 07:20:41.226Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:20:41.238Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:20:41.239Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:20:41.239Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:20:41.242Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:20:41.243Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:20:41.247Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:20:41.250Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:20:41.911Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rejection rate4.2%-0.8%contamination"}

## 2026-09-11 07:20:47.071Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:20:47.090Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 11

## 2026-09-11 07:20:47.091Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:20:51.214Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:20:53.629Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:20:55.258Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:20:59.276Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:20:59.286Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 7

## 2026-09-11 07:20:59.287Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:21:01.369Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:21:07.294Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:21:07.306Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 8

## 2026-09-11 07:21:07.308Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:21:08.655Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:21:11.834Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:21:11.845Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 7

## 2026-09-11 07:21:11.846Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:21:25.913Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:21:27.459Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:21:29.304Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:21:29.324Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 13

## 2026-09-11 07:21:29.325Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:21:30.865Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:21:40.922Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:21:40.939Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 11

## 2026-09-11 07:21:40.939Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:21:51.171Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:21:59.603Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:22:01.089Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:22:02.711Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:22:04.027Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:22:10.914Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:22:10.932Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 14

## 2026-09-11 07:22:10.933Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:22:12.304Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:22:14.428Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:22:14.441Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 9

## 2026-09-11 07:22:14.444Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:22:16.753Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:22:18.970Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:22:18.981Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 7

## 2026-09-11 07:22:18.981Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:22:30.883Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:22:44.831Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:22:44.848Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 13

## 2026-09-11 07:22:44.848Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:23:00.425Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 91

## 2026-09-11 07:23:00.426Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:23:15.676Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 88

## 2026-09-11 07:23:15.676Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:23:30.689Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 95

## 2026-09-11 07:23:30.689Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:23:45.721Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 88

## 2026-09-11 07:23:45.721Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:24:00.687Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 98

## 2026-09-11 07:24:00.689Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:24:15.673Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 81

## 2026-09-11 07:24:15.673Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:25:05.660Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 74

## 2026-09-11 07:25:05.661Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:25:21.821Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 232

## 2026-09-11 07:25:21.827Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:26:11.062Z load
- url: http://localhost:3000/

## 2026-09-11 07:26:15.297Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:26:15.303Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:26:15.303Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:26:15.303Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:26:15.306Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:26:15.306Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:26:15.510Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:26:15.511Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:26:21.798Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:26:21.813Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 10

## 2026-09-11 07:26:21.814Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:26:23.424Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:26:25.156Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:26:25.174Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 13

## 2026-09-11 07:26:25.174Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:26:26.275Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:26:32.246Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:26:32.263Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 13

## 2026-09-11 07:26:32.263Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:26:34.616Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:26:36.029Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:26:37.454Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:26:38.619Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:26:38.636Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 13

## 2026-09-11 07:26:38.637Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:26:41.907Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:26:51.123Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:26:58.507Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:26:59.969Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:27:05.228Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:27:05.247Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 12

## 2026-09-11 07:27:05.248Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:27:06.382Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:27:07.789Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:27:09.462Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:27:09.475Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 9

## 2026-09-11 07:27:09.475Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:27:17.963Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:27:23.390Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:27:23.408Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 13

## 2026-09-11 07:27:23.408Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:27:28.872Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:27:34.566Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:27:41.541Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:27:41.562Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 16

## 2026-09-11 07:27:41.562Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:27:56.647Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 89

## 2026-09-11 07:27:56.648Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:28:11.629Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 76

## 2026-09-11 07:28:11.629Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:28:26.647Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 93

## 2026-09-11 07:28:26.647Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:28:28.440Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:28:31.713Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:28:32.915Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:28:48.370Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:28:51.738Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:28:53.709Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:28:53.721Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 8

## 2026-09-11 07:28:53.721Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:28:56.063Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:28:57.500Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:28:58.949Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:29:28.821Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:29:31.151Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:29:31.162Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 8

## 2026-09-11 07:29:31.162Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:29:32.867Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:29:37.895Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:29:43.135Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:29:43.155Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 16

## 2026-09-11 07:29:43.155Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:29:58.684Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 96

## 2026-09-11 07:29:58.684Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:30:01.504Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:30:04.572Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:30:06.127Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:30:06.143Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 10

## 2026-09-11 07:30:06.143Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:30:08.127Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:30:10.177Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:30:34.995Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:30:43.276Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:30:44.606Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:30:44.636Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 25

## 2026-09-11 07:30:44.637Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:30:59.754Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 129

## 2026-09-11 07:30:59.754Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:31:15.889Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 299

## 2026-09-11 07:31:15.889Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:31:33.280Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 2692

## 2026-09-11 07:31:33.280Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:31:45.866Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 267

## 2026-09-11 07:31:45.866Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:32:05.841Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 5251

## 2026-09-11 07:32:08.216Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:32:19.496Z network.error
- method: GET
- url: http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com
- status: 500
- statusText: Internal Server Error
- response: {"error":"column \"paymentStatus\" does not exist"}
- durationMs: 3907

## 2026-09-11 07:32:19.497Z console.error
- text: Fetch error from http://localhost:5000/api/scrap/payments/history?role=hub&email=test31@gmail.com: {"error":"column \"paymentStatus\" does not exist"}

## 2026-09-11 07:33:42.178Z load
- url: http://localhost:3000/

## 2026-09-11 07:33:45.795Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:33:45.804Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:33:45.804Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:33:45.804Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:33:45.806Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:33:45.807Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:33:46.022Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:33:46.033Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:33:47.644Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:33:50.491Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:33:52.299Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:33:53.720Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:33:53.740Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 12

## 2026-09-11 07:33:53.742Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:33:55.151Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:33:57.255Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:33:59.021Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:34:46.562Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:34:46.578Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 10

## 2026-09-11 07:34:46.578Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:34:48.073Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:34:49.296Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:34:50.913Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:34:52.177Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:34:59.112Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Mixed Paper","valueLength":11,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 07:34:59.329Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Mixed Paper","valueLength":11,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 07:35:00.438Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"HDPE Drums","valueLength":10,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 07:35:00.443Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"HDPE Drums","valueLength":10,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 07:35:11.732Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"HDPE Drums","valueLength":10,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 07:35:11.952Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:36:02.112Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:36:02.130Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 10

## 2026-09-11 07:36:02.130Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:36:03.738Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:36:04.981Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:36:05.933Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:39:19.544Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:39:23.883Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:39:25.356Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:39:26.521Z click
- element: {"tag":"nav","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"DashboardSell Your ScrapCollection LogPayment HistoryCompliance ReportsArea ManagementSettings"}

## 2026-09-11 07:39:27.737Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:39:29.377Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:39:33.709Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:39:36.078Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:42:11.593Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:42:12.913Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:42:14.167Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:42:15.494Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:42:17.022Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:42:19.980Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:43:02.301Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:43:03.966Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:43:05.243Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:43:06.185Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:43:07.718Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:43:09.931Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:46:06.242Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:46:23.674Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:46:27.612Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:46:32.230Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:46:38.856Z load
- url: http://localhost:3000/

## 2026-09-11 07:46:42.275Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:46:42.283Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:46:42.284Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:46:42.284Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:46:42.286Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:46:42.286Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:46:42.498Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:46:42.502Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:46:46.748Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:46:48.784Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:46:53.933Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:47:00.473Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:47:03.968Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:47:07.418Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:47:08.476Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:47:11.966Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:48:34.949Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:48:34.997Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:48:34.997Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:48:34.997Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:48:35.010Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:48:35.011Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:49:27.347Z load
- url: http://localhost:3000/

## 2026-09-11 07:49:29.636Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:49:29.645Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:49:29.645Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:49:29.645Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:49:29.647Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:49:29.648Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:49:29.856Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:49:29.859Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:49:35.623Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:49:37.061Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:49:38.190Z click
- element: {"tag":"nav","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"DashboardSell Your ScrapCollection LogPayment HistoryCompliance ReportsArea ManagementSettings"}

## 2026-09-11 07:49:39.652Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:49:40.775Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:49:43.588Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:49:49.158Z click
- element: {"tag":"html","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"\n\t\timport { injectIntoGlobalHook } from \"/@react-refresh\";\ninjectIntoGlobalHook(window);\nwindow.$RefreshReg$ = () => {};\nwindow.$RefreshSig$ = () => (type) => type;\n\n\t\t\n\n\t\t\n\t\t\n\t\t\n\t\t\n\t\tReLoop Scrap Management Dashboard\n\t\tconst SITE_PAGES_ENDPOINT = '/__horizons/site-pages';\n\nconst OUTGOING_SITE_PAGES_MESSAGE = 'sitePages';\nconst INCOMING_REQUEST_SITE_PAGES_MESSAGE = 'request-site-pages';\n\nconst ALLOWED_PARENT_ORIGINS = [\n\t'https://horizons.hostinger.com',\n\t'https://horizons.hostinger.dev',\n\t'https://horizons-frontend-local.hostinger.dev',\n\t'http://localhost:4000',\n];\n\nfunction postSitePages(pages) {\n\tlet parentOrigin = window.location.ancestorOrigins?.[0];\n\tif (!parentOrigin && document.referrer) {\n\t\ttry {\n\t\t\tparentOrigin = new URL(document.referrer).origin;\n\t\t} catch {}\n\t}\n\tif (parentOrigin && ALLOWED_PARENT_ORIGINS.includes(parentOrigin)) {\n\t\twindow.parent.postMessage({ type: OUTGOING_SITE_PAGES_MESSAGE, payload: { pages } }, parentOrigin);\n\t}\n}\n\nasync function sendSitePagesToParent() {\n\tif (window.self === window.top) {\n\t\treturn;\n\t}\n\n\ttry {\n\t\tconst response = await fetch(SITE_PAGES_ENDPOINT);\n\t\tif (!response.ok) {\n\t\t\tthrow new Error(`HTTP ${response.status}`);\n\t\t}\n\t\tpostSitePages(await response.json());\n\t} catch (error) {\n\t\tconsole.error('[site-pages] Failed to send site pages to parent:', error);\n\t}\n}\n\nif (window.self !== window.top) {\n\twindow.addEventListener('load', sendSitePagesToParent);\n\twindow.addEventListener('message', (event) => {\n\t\tif (event.data?.type === INCOMING_REQUEST_SITE_PAGES_MESSAGE) {\n\t\t\tsendSitePagesToParent();\n\t\t}\n\t});\n}\n\n\t\t\n\t#root[data-edit-mode-enabled=\"true\"] {\n\t\tcursor: pointer;\n\t}\n\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id] {\n\t\tcursor: pointer;\n\t\toutline: 2px dashed #357DF9;\n\t\toutline-offset: 2px;\n\t\tmin-height: 1em;\n\t\toverflow-wrap: anywhere;\n\t\tmin-width: 0;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] img[data-edit-id] {\n\t\toutline-offset: -2px;\n\t}\n\t#root[data-edit-mode-enabled=\"true\"] [data-edit-id]:hover {\n\t\tbackground-color: #3..."}

## 2026-09-11 07:49:51.970Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Active Zones1Total Pickups Mapped2Total Volume20.00 KgHub StatusActive City:AllChennaiMaduraiCoimbatoreTrichySalemActive Service Zones & RoutesReal-time geo-fence and hub mapping across Tamil Nadu 10 Zones ListedZone IDCityAssigned HubHouseholdsDaily VolumeStatusActions Zone A-1 ChennaiShakti Textiles3401.5 tCompletedConfigure  Zone B-2 MaduraiCorporation Ward 124361.9 tCompletedConfigure  Zone C-3 CoimbatoreVeda Electronics5322.3 tScheduledConfigure  Zone D-4 TrichySahyadri Hospitals6282.7 tCompletedConfigure  Zone E-5 SalemTrimurti Packaging7243.1 tCompletedConfigure  Zone F-6 TirunelveliGreenLoop Logistics8203.5 tCompletedConfigure  Zone A-7 ErodeAnand Motors Ltd9163.9 tScheduledConfigure  Zone B-8 VelloreRachna School Trust1,0124.3 tCompletedConfigure  Zone C-9 ThoothukudiKalpataru Foods1,1084.7 tCompletedConfigure  Zone D-10 ThanjavurMetro Rail Depot1,2045.1 tCompletedConfigure ReLoop Scrap Management · live database · 2026"}

## 2026-09-11 07:50:03.703Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Chennai"}

## 2026-09-11 07:50:06.183Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Madurai"}

## 2026-09-11 07:50:08.473Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Coimbatore"}

## 2026-09-11 07:50:14.190Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:50:17.545Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 07:50:17.655Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:50:17.656Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:50:17.656Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:50:17.657Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:50:17.657Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:50:17.657Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:50:19.103Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:50:19.331Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-11 07:50:20.893Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 07:50:20.894Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-11 07:50:20.895Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 07:50:20.895Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 07:50:22.148Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 07:50:22.375Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:50:22.375Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:50:24.216Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 07:50:25.280Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 07:50:31.739Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:50:33.002Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:50:34.343Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 07:50:39.165Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 07:50:40.230Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:50:42.228Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:50:42.250Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 15

## 2026-09-11 07:50:42.251Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:50:44.489Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 07:51:06.965Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 07:51:06.978Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 9

## 2026-09-11 07:51:06.978Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 07:51:09.438Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 07:59:13.454Z load
- url: http://localhost:3000/

## 2026-09-11 07:59:23.587Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:59:23.594Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 07:59:23.595Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 07:59:23.595Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:59:23.597Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 07:59:23.597Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 07:59:23.813Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 07:59:23.819Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 07:59:31.252Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 07:59:31.362Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 07:59:31.363Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 07:59:31.363Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 07:59:31.363Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 07:59:31.365Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 07:59:31.365Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 07:59:35.158Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 08:00:14.619Z load
- url: http://localhost:3000/

## 2026-09-11 08:00:25.412Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign In"}

## 2026-09-11 08:00:25.961Z load
- url: http://localhost:3000/login

## 2026-09-11 08:00:26.053Z navigate
- url: http://localhost:3000/login
- via: replaceState

## 2026-09-11 08:00:58.525Z load
- url: http://localhost:3000/login

## 2026-09-11 08:00:58.617Z navigate
- url: http://localhost:3000/login
- via: replaceState

## 2026-09-11 08:01:00.725Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 08:01:00.728Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:01:00.728Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:01:00.729Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 08:01:00.731Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:01:00.731Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:01:00.938Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 08:01:00.940Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-11 08:01:01.533Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 08:01:01.653Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 08:01:01.656Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:01:01.656Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:01:01.656Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 08:01:01.659Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:01:01.659Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:01:06.413Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 08:01:06.414Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 08:03:08.070Z load
- url: http://localhost:3000/signup

## 2026-09-11 08:03:08.121Z navigate
- url: http://localhost:3000/signup
- via: replaceState

## 2026-09-11 08:03:08.193Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 08:10:11.200Z load
- url: http://localhost:3000/login

## 2026-09-11 08:10:11.359Z navigate
- url: http://localhost:3000/login
- via: replaceState

## 2026-09-11 08:10:11.454Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 08:10:13.839Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 08:10:13.844Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:10:13.844Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:10:13.844Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 08:10:13.847Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:10:13.847Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:10:14.059Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 08:10:14.062Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 08:10:19.802Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 08:10:21.202Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 08:10:22.423Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 08:10:24.020Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-11 08:10:25.922Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-11 08:10:27.235Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 08:10:27.288Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 17

## 2026-09-11 08:10:27.290Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 08:10:37.001Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 08:10:37.141Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 08:10:37.144Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:10:37.144Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:10:37.144Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 08:10:37.145Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:10:37.146Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:10:48.861Z load
- url: http://localhost:3000/login

## 2026-09-11 08:10:48.958Z navigate
- url: http://localhost:3000/login
- via: replaceState

## 2026-09-11 08:10:49.055Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 08:10:49.060Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:10:49.060Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:10:49.061Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 08:10:49.065Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:10:49.065Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:10:49.276Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Secure access"}

## 2026-09-11 08:10:51.191Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 08:10:51.192Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-11 08:10:51.457Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 08:10:51.577Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 08:10:51.580Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:10:51.580Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 08:10:51.580Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 08:10:51.583Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:10:51.583Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 08:10:53.886Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 08:10:53.887Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 08:39:31.192Z load
- url: http://localhost:3000/

## 2026-09-11 09:12:25.444Z load
- url: http://localhost:3000/

## 2026-09-11 09:12:29.189Z load
- url: http://localhost:3000/#about

## 2026-09-11 09:12:29.207Z navigate
- url: http://localhost:3000/#about
- via: replaceState

## 2026-09-11 09:12:30.326Z load
- url: http://localhost:3000/

## 2026-09-11 09:12:48.124Z load
- url: http://localhost:3000/

## 2026-09-11 09:12:49.110Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 09:12:58.483Z load
- url: http://localhost:3000/

## 2026-09-11 09:13:24.127Z load
- url: http://localhost:3000/

## 2026-09-11 09:13:24.245Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 09:13:29.036Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:13:29.045Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:13:29.046Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:13:29.046Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:13:29.048Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:13:29.049Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:13:29.251Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Don't have an account? Create account"}

## 2026-09-11 09:13:29.380Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"","valueLength":0,"text":""}

## 2026-09-11 09:13:29.383Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:13:29.384Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:13:29.384Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:13:29.389Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:13:29.389Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:15:46.806Z load
- url: http://localhost:3000/

## 2026-09-11 09:15:47.203Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 09:16:04.805Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:16:04.814Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:16:04.814Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:16:04.814Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:16:04.817Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:16:04.817Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:16:05.014Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 09:16:38.387Z load
- url: http://localhost:3000/

## 2026-09-11 09:16:38.529Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-11 09:16:41.702Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:16:41.707Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:16:41.707Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:16:41.708Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:16:41.710Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:16:41.710Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:16:41.923Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:16:41.938Z submit
- action: http://localhost:3000/
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 09:16:44.382Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 09:16:44.495Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:16:44.497Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:16:44.497Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:16:44.497Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:16:44.498Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:16:44.498Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:16:47.764Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:16:48.165Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 09:16:50.031Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:16:50.032Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:16:50.426Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 09:16:52.902Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:16:52.903Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:16:53.129Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"as","valueLength":2,"text":""}

## 2026-09-11 09:16:56.535Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:16:56.535Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:16:56.536Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:16:56.758Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:16:58.907Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=4]","valueLength":4,"text":""}

## 2026-09-11 09:16:58.908Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=4]","valueLength":4,"text":""}

## 2026-09-11 09:16:59.069Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:16:59.071Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:16:59.130Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:16:59.299Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:16:59.300Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:16:59.672Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:16:59.840Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:16:59.843Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:16:59.905Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:17:00.066Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:17:00.067Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:17:10.589Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:17:20.307Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:17:21.822Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:17:22.037Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 09:17:25.373Z click
- element: {"tag":"svg","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-11 09:17:26.295Z click
- element: {"tag":"svg","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-11 09:17:26.520Z click
- element: {"tag":"svg","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-11 09:17:27.925Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 09:17:33.856Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 09:17:35.512Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"assgasfGs","valueLength":9,"text":""}

## 2026-09-11 09:17:35.844Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 09:17:37.931Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:17:37.935Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=4]","valueLength":4,"text":""}

## 2026-09-11 09:17:38.195Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-11 09:17:39.277Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:17:42.136Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:19:41.654Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 09:19:41.657Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:19:48.195Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 09:19:48.195Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:19:50.819Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 09:19:50.824Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 09:19:50.965Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:19:50.966Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:19:50.967Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:19:50.967Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:19:50.969Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:19:50.969Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:19:52.488Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:22:31.082Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 09:22:31.091Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 09:22:31.244Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:22:31.246Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:22:31.246Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:22:31.247Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:22:31.249Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:22:31.250Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:22:34.575Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:22:34.582Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 09:22:52.796Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"ALL","valueLength":3,"text":"All StatusesPaid / SuccessPending"}

## 2026-09-11 09:22:53.020Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"ALL","valueLength":3,"text":"All StatusesPaid / SuccessPending"}

## 2026-09-11 09:22:55.379Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"ALL","valueLength":3,"text":"All StatusesPaid / SuccessPending"}

## 2026-09-11 09:24:46.409Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"ALL","valueLength":3,"text":"All StatusesPaid / SuccessPending"}

## 2026-09-11 09:24:49.333Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"ALL","valueLength":3,"text":"All StatusesPaid / SuccessPending"}

## 2026-09-11 09:24:49.557Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 09:24:49.685Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:24:49.687Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:24:49.687Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:24:49.687Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:24:49.689Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:24:49.689Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:24:51.305Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:25:23.847Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tailored portals for Admins, Corporates, Hub Managers, and Delivery Partners to manage operations smoothly."}

## 2026-09-11 09:25:24.871Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Real-time updates on scrap collection volumes, transit statuses, and district-wise distribution hubs."}

## 2026-09-11 09:32:36.110Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tools"}

## 2026-09-11 09:32:36.112Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 09:42:06.669Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Process"}

## 2026-09-11 09:42:06.674Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 09:42:21.319Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Monitor collection runs, transit weights, and hub performance metrics with real-time logs and dashboards."}

## 2026-09-11 09:42:23.974Z click
- element: {"tag":"h3","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Instant Payouts & Settlement"}

## 2026-09-11 09:44:47.344Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"2Detailed Run Analytics"}

## 2026-09-11 09:44:49.247Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"List your scrap materials, select preferred time slots, and dispatch pickup notifications to agents instantly."}

## 2026-09-11 09:49:19.911Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"FAQ"}

## 2026-09-11 09:49:19.912Z navigate
- url: http://localhost:3000/#faq
- via: popstate

## 2026-09-11 09:49:29.887Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"What types of electronic devices and scrap do you accept?+"}

## 2026-09-11 09:49:33.011Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"How much money can I earn from recycling?+"}

## 2026-09-11 09:49:35.855Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Is pickup really free?+"}

## 2026-09-11 09:49:43.096Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Is pickup really free?−"}

## 2026-09-11 09:49:48.368Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 09:49:48.369Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 09:50:32.950Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 09:50:32.952Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 09:53:37.655Z click
- element: {"tag":"main","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"🌱 Sustainable & Transparent Recycling EcosystemSmart Scrap Management for a Greener FutureWelcome to ReLoop. Check our current scrap rates below or schedule a doorstep pickup for households, corporate partners, and collection hubs.Go to DashboardScrap Rate-ListThe items our customers sell the most — tap any card to check market pricing per unit.AppliancesFRIDGESingle Door₹850 / PcAppliancesAIR CONDITIONERCopper Split 1 Ton₹3850 / PcAppliancesWASHING MACHINESemi Automatic₹700 / PcPaperPAPERNewspaper₹15 / KgPaperPAPERCartons₹5 / KgPlasticPLASTICPET Bottles & Containers₹14 / KgTextilesCLOTHESOld Fabrics & Textiles₹10 / KgElectronicsE-WASTEInverters & UPS Units₹45 / KgMetals & E-WasteBATTERIESLead-Acid Scrap Batteries₹75 / Kg3 Simple Steps and Kickstart the ProcessStreamline your scrap collection and recycling workflow with zero friction. Automate scheduling, pickup assignments, and instant digital payouts.1Smart Pickup RequestList your scrap materials, select preferred time slots, and dispatch pickup notifications to agents instantly.2Detailed Run AnalyticsMonitor collection runs, transit weights, and hub performance metrics with real-time logs and dashboards.3Instant Payouts & SettlementComplete transactions with automated receipt generation, scale verifications, and secure digital settlements.reloop-workflow-engine.internalStep 1: Pickup Dispatch● Active NodeCustomer Location / HubZone A - Central Collection Hub #402Assigned PartnerDelivery Agent ID: #DA-8821❓ Frequently Asked QuestionsGot Questions? We've Got AnswersFind answers to common questions about our recycling process, rewards system, and environmental impact.How does Reloop work?+What types of electronic devices and scrap do you accept?+How is my personal data protected?+How much money can I earn from recycling?+Is pickup really free?+What happens to devices that can't be refurbished?+Which cities do you currently serve?+Logistics & Calculation ToolsQuick utilities for global cargo tracking, marine routing..."}

## 2026-09-11 09:54:27.129Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 09:54:27.136Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 09:54:27.306Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:54:27.310Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:54:27.310Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:54:27.310Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:54:27.312Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:54:27.312Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:54:30.744Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:54:30.750Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 09:54:38.872Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 09:54:40.403Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 09:54:40.514Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:54:40.516Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:54:40.516Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:54:40.516Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:54:40.517Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:54:40.517Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:54:49.925Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 09:55:03.862Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 09:55:03.862Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 09:55:07.724Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Process"}

## 2026-09-11 09:55:07.728Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 09:55:10.757Z load
- url: http://localhost:3000/#process

## 2026-09-11 09:55:11.064Z navigate
- url: http://localhost:3000/#process
- via: replaceState

## 2026-09-11 09:55:22.378Z load
- url: http://localhost:3000/#process

## 2026-09-11 09:55:28.212Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 09:55:28.213Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:55:30.233Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign In"}

## 2026-09-11 09:55:30.236Z navigate
- url: http://localhost:3000/login
- via: pushState

## 2026-09-11 09:55:30.376Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:55:30.382Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:55:30.382Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:55:30.382Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:55:30.385Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:55:30.385Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:55:34.328Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:55:34.333Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-11 09:55:34.528Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 09:55:34.655Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:55:34.657Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:55:34.661Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:55:34.661Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:55:34.663Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:55:34.663Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:55:38.664Z navigate
- url: http://localhost:3000/login
- via: popstate

## 2026-09-11 09:55:38.782Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:55:38.784Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:55:38.784Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:55:38.784Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:55:38.786Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:55:38.787Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:55:39.595Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:55:47.368Z load
- url: http://localhost:3000/#about

## 2026-09-11 09:55:47.528Z navigate
- url: http://localhost:3000/#about
- via: replaceState

## 2026-09-11 09:55:52.089Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 09:55:52.089Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:55:53.023Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 09:55:53.024Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:55:56.300Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 09:55:56.303Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:55:57.654Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tools"}

## 2026-09-11 09:55:57.654Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 09:55:59.335Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"FAQ"}

## 2026-09-11 09:55:59.336Z navigate
- url: http://localhost:3000/#faq
- via: popstate

## 2026-09-11 09:56:01.054Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Process"}

## 2026-09-11 09:56:01.054Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 09:56:06.064Z click
- element: {"tag":"nav","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-ListProcessFAQToolsAboutGo to Dashboard"}

## 2026-09-11 09:56:07.219Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 09:56:07.219Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:56:14.910Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 09:56:14.911Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 09:56:15.035Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:56:15.037Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:56:15.037Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:56:15.038Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:56:15.039Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:56:15.039Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:56:17.452Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:56:17.453Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 09:56:19.687Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:56:27.813Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 09:56:29.207Z navigate
- url: http://localhost:3000/#faq
- via: popstate

## 2026-09-11 09:56:31.084Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 09:56:32.549Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:56:33.389Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 09:56:34.393Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 09:56:35.670Z navigate
- url: http://localhost:3000/#faq
- via: popstate

## 2026-09-11 09:56:36.900Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 09:56:37.854Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 09:56:38.942Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:56:39.915Z navigate
- url: http://localhost:3000/
- via: popstate

## 2026-09-11 09:56:49.493Z click
- element: {"tag":"header","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoopScrap ManagementRate-ListProcessFAQToolsAboutGo to Dashboard"}

## 2026-09-11 09:57:08.570Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 09:57:08.571Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 09:57:10.024Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tools"}

## 2026-09-11 09:57:10.025Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 09:57:11.083Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"FAQ"}

## 2026-09-11 09:57:11.084Z navigate
- url: http://localhost:3000/#faq
- via: popstate

## 2026-09-11 09:57:12.191Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Process"}

## 2026-09-11 09:57:12.192Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 09:57:13.360Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 09:57:13.360Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 09:58:39.574Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 09:58:39.574Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 09:58:39.700Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 09:58:39.702Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:58:39.702Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 09:58:39.702Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 09:58:39.704Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:58:39.704Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 09:58:41.571Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 09:58:41.573Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 09:58:49.483Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 10:07:12.268Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:07:15.030Z click
- element: {"tag":"nav","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-ListProcessFAQToolsAboutGo to Dashboard"}

## 2026-09-11 10:07:15.936Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Process"}

## 2026-09-11 10:07:15.936Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 10:20:36.266Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 10:20:36.293Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 10:20:38.073Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tools"}

## 2026-09-11 10:20:38.073Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 10:20:39.651Z click
- element: {"tag":"nav","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-ListProcessFAQToolsAboutGo to Dashboard"}

## 2026-09-11 10:20:40.084Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"FAQ"}

## 2026-09-11 10:20:40.084Z navigate
- url: http://localhost:3000/#faq
- via: popstate

## 2026-09-11 10:20:41.634Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Process"}

## 2026-09-11 10:20:41.635Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 10:20:42.741Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 10:20:42.741Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:20:48.504Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 10:20:48.519Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 10:20:48.829Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:20:48.838Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 10:20:48.839Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 10:20:48.839Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:20:48.840Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:20:48.840Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:20:52.763Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:20:54.396Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Process"}

## 2026-09-11 10:20:54.396Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 10:21:02.941Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Monitor collection runs, transit weights, and hub performance metrics with real-time logs and dashboards."}

## 2026-09-11 10:21:04.644Z click
- element: {"tag":"p","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Complete transactions with automated receipt generation, scale verifications, and secure digital settlements."}

## 2026-09-11 10:21:06.527Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tools"}

## 2026-09-11 10:21:06.527Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 10:21:11.319Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Shipment Tracking ↗Track multi-carrier global shipments, waybills, and cargo movement efficiently."}

## 2026-09-11 10:21:20.429Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Ship Finder ↗Monitor live vessel traffic, maritime positions, and global sea routes in real time."}

## 2026-09-11 10:21:32.137Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Unit Converter ↗Convert weight, volume, and metric measurements accurately for scrap processing."}

## 2026-09-11 10:21:55.128Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 10:21:55.129Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:22:21.050Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 10:22:21.057Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 10:22:21.331Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:22:21.338Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 10:22:21.339Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 10:22:21.340Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:22:21.344Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:22:21.344Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:22:23.352Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 10:22:23.370Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 10:22:31.279Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 10:22:36.703Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Mixed Paper","valueLength":11,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 10:22:36.934Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Mixed Paper","valueLength":11,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 10:22:39.650Z change
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Aluminium Cans","valueLength":14,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 10:22:39.656Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Aluminium Cans","valueLength":14,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 10:22:41.542Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Aluminium Cans","valueLength":14,"text":"Mixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)"}

## 2026-09-11 10:22:41.543Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Enter complete address with landmark","label":"Enter complete address with landmark","value":"","valueLength":0,"text":""}

## 2026-09-11 10:22:41.763Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Enter complete address with landmark","label":"Enter complete address with landmark","value":"","valueLength":0,"text":""}

## 2026-09-11 10:22:45.496Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Enter complete address with landmark","label":"Enter complete address with landmark","value":"gh","valueLength":2,"text":""}

## 2026-09-11 10:22:45.496Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Enter complete address with landmark","label":"Enter complete address with landmark","value":"gh","valueLength":2,"text":""}

## 2026-09-11 10:22:45.718Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Confirm and Schedule Pickup"}

## 2026-09-11 10:22:45.722Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"[select]","type":"select-one","value":"Aluminium Cans","length":14,"redacted":false},{"label":"[number]","type":"number","value":"10","length":2,"redacted":false},{"label":"[select]","type":"select-one","value":"Chennai","length":7,"redacted":false},{"label":"Enter complete address with landmark","type":"text","value":"gh","length":2,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-11 10:22:50.788Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-11 10:22:57.941Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-11 10:23:01.193Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-11 10:23:01.260Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 51

## 2026-09-11 10:23:01.261Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-11 10:23:07.844Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 10:23:07.970Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:23:07.972Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 10:23:07.972Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 10:23:07.972Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:23:07.974Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:23:07.974Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:23:09.358Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 10:23:09.589Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-11 10:23:11.072Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test30@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:23:11.075Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:23:11.076Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=7]","valueLength":7,"text":""}

## 2026-09-11 10:23:11.076Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=7]","valueLength":7,"text":""}

## 2026-09-11 10:23:12.402Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test30@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:23:12.624Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 10:23:12.625Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"test30@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=7]","length":7,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 10:23:15.916Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-11 10:23:33.593Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 10:23:33.719Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:23:33.721Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test30@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:23:33.721Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test30@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:23:33.721Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:23:33.723Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=7]","valueLength":7,"text":""}

## 2026-09-11 10:23:33.724Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=7]","valueLength":7,"text":""}

## 2026-09-11 10:23:34.989Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test30@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:23:35.208Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test30@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:23:36.739Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:23:36.740Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=7]","valueLength":7,"text":""}

## 2026-09-11 10:23:36.743Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:23:36.743Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:23:37.891Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:23:38.120Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 10:23:38.121Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"test33@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 10:23:41.245Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-11 10:27:54.479Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:28:08.388Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 10:28:08.389Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 10:28:09.410Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tools"}

## 2026-09-11 10:28:09.411Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 10:28:10.527Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"FAQ"}

## 2026-09-11 10:28:10.528Z navigate
- url: http://localhost:3000/#faq
- via: popstate

## 2026-09-11 10:28:12.394Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 10:28:12.395Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:28:47.774Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 10:28:47.777Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 10:28:47.957Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:28:47.961Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:28:47.961Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:28:47.962Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:28:47.964Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:28:47.964Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:28:49.945Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 10:28:49.949Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"test33@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 10:29:59.137Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 10:29:59.249Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:29:59.250Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:29:59.250Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:29:59.250Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:29:59.251Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:29:59.251Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:30:02.397Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 10:30:02.398Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"test33@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 10:30:12.229Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 10:30:12.343Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:30:12.345Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:30:12.346Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:30:12.346Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:30:12.347Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:30:12.347Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:30:13.833Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:30:14.055Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test33@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:30:16.633Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:30:16.637Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-11 10:30:16.639Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 10:30:16.639Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 10:30:18.297Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:30:18.518Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-11 10:30:18.519Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-11 10:30:39.708Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign out"}

## 2026-09-11 10:30:39.824Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:30:39.825Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:30:39.825Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:30:39.825Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:30:39.826Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 10:30:39.826Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 10:30:41.619Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:32:59.161Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 10:32:59.163Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:33:20.802Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Process"}

## 2026-09-11 10:33:20.802Z navigate
- url: http://localhost:3000/#process
- via: popstate

## 2026-09-11 10:33:22.747Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"FAQ"}

## 2026-09-11 10:33:22.748Z navigate
- url: http://localhost:3000/#faq
- via: popstate

## 2026-09-11 10:33:23.946Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Tools"}

## 2026-09-11 10:33:23.947Z navigate
- url: http://localhost:3000/#tools
- via: popstate

## 2026-09-11 10:33:25.467Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"About"}

## 2026-09-11 10:33:25.467Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 10:33:28.207Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 10:33:28.208Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 10:33:28.331Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:33:28.332Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:33:28.332Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:33:28.332Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:33:28.333Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 10:33:28.333Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 10:33:57.400Z navigate
- url: http://localhost:3000/#about
- via: popstate

## 2026-09-11 10:34:06.414Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Rate-List"}

## 2026-09-11 10:34:06.415Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:34:30.761Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-11 10:34:30.762Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-11 10:34:30.872Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-11 10:34:30.874Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:34:30.874Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-11 10:34:30.874Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-11 10:34:30.875Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 10:34:30.875Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-11 10:34:34.018Z navigate
- url: http://localhost:3000/#ratelist
- via: popstate

## 2026-09-11 10:44:50.990Z load
- url: http://localhost:3000/#ratelist

## 2026-09-11 10:44:51.434Z navigate
- url: http://localhost:3000/#ratelist
- via: replaceState

## 2026-09-11 10:45:36.216Z load
- url: http://localhost:3000/#ratelist

## 2026-09-11 10:46:36.237Z load
- url: http://localhost:3000/#ratelist

## 2026-09-11 10:47:36.305Z load
- url: http://localhost:3000/#ratelist

## 2026-09-15 04:27:03.403Z load
- url: http://localhost:3000/

## 2026-09-15 04:27:05.282Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-15 04:30:16.978Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign In to Dashboard"}

## 2026-09-15 04:30:16.981Z navigate
- url: http://localhost:3000/login
- via: pushState

## 2026-09-15 04:30:17.164Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-15 04:30:17.173Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:30:17.173Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:30:17.173Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:30:17.176Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:30:17.177Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:30:18.869Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:30:18.875Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:30:20.999Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2121

## 2026-09-15 04:30:21.001Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:30:21.003Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:30:34.961Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:30:34.962Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:30:37.112Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2150

## 2026-09-15 04:30:37.113Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:30:37.113Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:36:34.432Z load
- url: http://localhost:3000/login

## 2026-09-15 04:37:03.660Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-15 04:37:03.671Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:37:03.671Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:37:03.671Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:37:03.673Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:37:03.673Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:37:03.885Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:37:03.888Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:37:06.025Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2135

## 2026-09-15 04:37:06.026Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:37:06.026Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:37:14.265Z load
- url: http://localhost:3000/login

## 2026-09-15 04:37:17.436Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-15 04:37:17.440Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:37:17.440Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:37:17.440Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:37:17.442Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:37:17.442Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:37:17.665Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:37:17.667Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:37:19.795Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2128

## 2026-09-15 04:37:19.795Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:37:19.796Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:37:24.316Z navigate
- url: http://localhost:3000/
- via: popstate

## 2026-09-15 04:37:27.699Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Create Account"}

## 2026-09-15 04:37:27.701Z navigate
- url: http://localhost:3000/signup
- via: pushState

## 2026-09-15 04:37:27.843Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"","valueLength":0,"text":""}

## 2026-09-15 04:37:27.845Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:37:27.845Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:37:27.845Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:37:27.847Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:37:27.847Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:37:30.903Z navigate
- url: http://localhost:3000/
- via: popstate

## 2026-09-15 04:37:32.272Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign In to Dashboard"}

## 2026-09-15 04:37:32.273Z navigate
- url: http://localhost:3000/login
- via: pushState

## 2026-09-15 04:37:32.399Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-15 04:37:32.400Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:37:32.400Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:37:32.400Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:37:32.401Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:37:32.401Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:37:33.891Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:37:33.892Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:37:36.036Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2143

## 2026-09-15 04:37:36.036Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:37:36.036Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:37:57.541Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:37:57.542Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:37:59.691Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2149

## 2026-09-15 04:37:59.691Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:37:59.691Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:38:01.276Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:38:01.900Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:38:03.945Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-15 04:38:05.175Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-15 04:38:05.176Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:38:05.180Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-15 04:38:05.180Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-15 04:38:06.607Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-15 04:38:06.829Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:38:06.830Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:38:08.969Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"dhanapaul2020@gmail.com","password":"[redacted:length=9]"}
- message: Failed to fetch
- durationMs: 2138

## 2026-09-15 04:38:08.969Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:38:08.969Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:39:09.309Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:39:09.310Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:39:11.429Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"dhanapaul2020@gmail.com","password":"[redacted:length=9]"}
- message: Failed to fetch
- durationMs: 2119

## 2026-09-15 04:39:11.429Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:39:11.429Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:39:12.772Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:39:12.773Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:39:14.925Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"dhanapaul2020@gmail.com","password":"[redacted:length=9]"}
- message: Failed to fetch
- durationMs: 2152

## 2026-09-15 04:39:14.925Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:39:14.926Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:39:16.439Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-15 04:39:16.653Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-15 04:39:19.170Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:39:19.171Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-15 04:39:19.172Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-15 04:39:19.173Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-15 04:39:20.433Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:39:20.434Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-15 04:39:20.653Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-15 04:39:21.907Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=11]","valueLength":11,"text":""}

## 2026-09-15 04:39:22.129Z click
- element: {"tag":"button","role":null,"ariaLabel":"Show password","name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-15 04:39:23.890Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:39:23.891Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"text","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Hide password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:39:26.016Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test31@gmail.com","password":"[redacted:length=11]"}
- message: Failed to fetch
- durationMs: 2125

## 2026-09-15 04:39:26.017Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:39:26.017Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:45:54.104Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:45:54.116Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"text","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Hide password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:45:56.274Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test31@gmail.com","password":"[redacted:length=11]"}
- message: Failed to fetch
- durationMs: 2154

## 2026-09-15 04:45:56.275Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:45:56.277Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:46:00.032Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:46:00.245Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:46:02.309Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test31@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:46:02.522Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:46:02.522Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"text","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Hide password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:46:04.661Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test31@gmail.com","password":"[redacted:length=11]"}
- message: Failed to fetch
- durationMs: 2139

## 2026-09-15 04:46:04.661Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:46:04.662Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:46:44.846Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:46:44.847Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test31@gmail.com","length":16,"redacted":false},{"label":"Password","type":"text","value":"[redacted:length=11]","length":11,"redacted":true},{"label":"Hide password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:46:46.998Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test31@gmail.com","password":"[redacted:length=11]"}
- message: Failed to fetch
- durationMs: 2150

## 2026-09-15 04:46:46.998Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:46:46.998Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:46:57.848Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Secure accessSign in to continueWork emailPasswordUnable to connect to server. Make sure backend is running.Sign in"}

## 2026-09-15 04:47:00.701Z load
- url: http://localhost:3000/login

## 2026-09-15 04:47:01.874Z navigate
- url: http://localhost:3000/
- via: popstate

## 2026-09-15 04:47:04.591Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Scrap"}

## 2026-09-15 04:47:04.592Z navigate
- url: http://localhost:3000/signup
- via: pushState

## 2026-09-15 04:47:04.723Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"","valueLength":0,"text":""}

## 2026-09-15 04:47:04.735Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:47:04.736Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:47:04.736Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:47:04.739Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:47:04.740Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:47:10.119Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Already have an account? Log in"}

## 2026-09-15 04:47:12.398Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Already have an account? Log in"}

## 2026-09-15 04:47:17.184Z navigate
- url: http://localhost:3000/
- via: popstate

## 2026-09-15 04:47:20.126Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Create Account"}

## 2026-09-15 04:47:20.127Z navigate
- url: http://localhost:3000/signup
- via: pushState

## 2026-09-15 04:47:20.254Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"","valueLength":0,"text":""}

## 2026-09-15 04:47:20.257Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:47:20.257Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:47:20.257Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:47:20.259Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:47:20.260Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:47:27.622Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Already have an account? Log in"}

## 2026-09-15 04:47:49.469Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Already have an account? Log in"}

## 2026-09-15 04:47:59.019Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Already have an account? Log in"}

## 2026-09-15 04:49:02.514Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Already have an account? Log in"}

## 2026-09-15 04:49:36.528Z navigate
- url: http://localhost:3000/
- via: popstate

## 2026-09-15 04:49:41.200Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Create Account"}

## 2026-09-15 04:49:41.201Z navigate
- url: http://localhost:3000/signup
- via: pushState

## 2026-09-15 04:49:41.319Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"","valueLength":0,"text":""}

## 2026-09-15 04:49:41.321Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:49:41.321Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@company.com","label":"Email Address","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:49:41.322Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:49:41.324Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:49:41.324Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"At least 6 chars","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:49:47.546Z navigate
- url: http://localhost:3000/
- via: popstate

## 2026-09-15 04:49:50.054Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign In to Dashboard"}

## 2026-09-15 04:49:50.055Z navigate
- url: http://localhost:3000/login
- via: pushState

## 2026-09-15 04:49:50.164Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-15 04:49:50.165Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:49:50.165Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 04:49:50.165Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 04:49:50.167Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:49:50.167Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 04:49:52.165Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:49:52.166Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:49:54.318Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2151

## 2026-09-15 04:49:54.321Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:49:54.322Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:50:25.566Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:50:25.567Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:50:27.727Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2159

## 2026-09-15 04:50:27.727Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:50:27.727Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:50:28.900Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:50:28.901Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:50:31.056Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2155

## 2026-09-15 04:50:31.056Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:50:31.057Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:50:33.814Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 04:50:33.815Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 04:50:35.964Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 2149

## 2026-09-15 04:50:35.964Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 04:50:35.964Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 06:24:47.766Z load
- url: http://localhost:3000/login

## 2026-09-15 06:24:50.376Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-15 06:24:50.388Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 06:24:50.389Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 06:24:50.389Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 06:24:50.392Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 06:24:50.392Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 06:24:50.587Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 06:24:50.595Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 06:24:54.273Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"test29@gmail.com","password":"[redacted:length=10]"}
- message: Failed to fetch
- durationMs: 3669

## 2026-09-15 06:24:54.275Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 06:24:54.276Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/login:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-15 06:27:40.378Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 06:27:40.379Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-15 06:27:41.432Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-15 06:27:41.566Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-15 06:27:41.570Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 06:27:41.571Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"test29@gmail.com","valueLength":16,"text":""}

## 2026-09-15 06:27:41.571Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-15 06:27:41.573Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 06:27:41.574Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=10]","valueLength":10,"text":""}

## 2026-09-15 06:27:50.994Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoop ConsoleScrap network access · Tamil Nadu opsSecure accessSign in to continueWork emailPasswordSign inDon't have an account? Create account"}

## 2026-09-15 06:29:06.561Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-15 06:29:06.562Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"test29@gmail.com","length":16,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=10]","length":10,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-27 04:57:24.002Z load
- url: http://localhost:3000/

## 2026-09-27 04:57:24.218Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-27 04:57:39.528Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign In to Dashboard"}

## 2026-09-27 04:57:39.533Z navigate
- url: http://localhost:3000/login
- via: pushState

## 2026-09-27 04:57:39.719Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-27 04:57:39.724Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 04:57:39.725Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 04:57:39.725Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-27 04:57:39.729Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 04:57:39.729Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 04:57:42.290Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 04:57:42.299Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-27 04:57:42.341Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"dhanapaul2020@gmail.com","password":"[redacted:length=9]"}
- message: Failed to fetch
- durationMs: 40

## 2026-09-27 04:57:42.344Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 04:57:42.345Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 04:59:24.576Z click
- element: {"tag":"form","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Secure accessSign in to continueWork emailPasswordUnable to connect to server. Make sure backend is running.Sign in"}

## 2026-09-27 04:59:25.031Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 04:59:25.032Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-27 04:59:25.042Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"dhanapaul2020@gmail.com","password":"[redacted:length=9]"}
- message: Failed to fetch
- durationMs: 10

## 2026-09-27 04:59:25.043Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 04:59:25.043Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 04:59:26.254Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 04:59:26.255Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-27 04:59:26.263Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"dhanapaul2020@gmail.com","password":"[redacted:length=9]"}
- message: Failed to fetch
- durationMs: 8

## 2026-09-27 04:59:26.263Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 04:59:26.263Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 04:59:26.468Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 04:59:26.469Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-27 04:59:26.478Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"dhanapaul2020@gmail.com","password":"[redacted:length=9]"}
- message: Failed to fetch
- durationMs: 8

## 2026-09-27 04:59:26.478Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 04:59:26.478Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 05:00:06.141Z load
- url: http://localhost:3000/login

## 2026-09-27 05:00:07.843Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-27 05:00:07.845Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 05:00:07.845Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 05:00:07.845Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-27 05:00:07.846Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 05:00:07.846Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 05:00:08.062Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 05:00:08.063Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-27 05:00:09.071Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-27 05:00:09.188Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-27 05:00:09.189Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 05:00:09.190Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 05:00:09.190Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-27 05:00:09.191Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 05:00:09.191Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 05:00:14.427Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 05:00:14.429Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-27 05:11:10.791Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-27 05:11:13.601Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-27 05:11:15.786Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:11:19.536Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:11:21.860Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:11:23.206Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-27 05:11:23.241Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 27

## 2026-09-27 05:11:23.242Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-27 05:11:24.759Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:11:35.572Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:11:37.184Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:11:38.565Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-27 05:11:39.985Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-27 05:11:41.204Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-27 05:11:43.224Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-27 05:11:44.793Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-27 05:11:49.222Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:11:51.849Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:11:58.232Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:12:37.172Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:12:41.232Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:12:43.918Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-27 05:13:58.387Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:14:00.336Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:14:02.085Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:14:03.591Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:14:09.409Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:14:11.989Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:14:13.736Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:14:37.515Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-27 05:14:37.535Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 16

## 2026-09-27 05:14:37.536Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-27 05:14:43.742Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:14:47.179Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-27 05:14:47.193Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 10

## 2026-09-27 05:14:47.194Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-27 05:14:52.065Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:14:54.036Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:14:56.035Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:14:58.910Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-27 05:15:05.050Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-27 05:15:17.071Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-27 05:17:27.024Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-27 05:17:28.494Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-27 05:17:30.719Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:17:32.050Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:17:33.406Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:17:41.691Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-27 05:17:41.704Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 10

## 2026-09-27 05:17:41.704Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-27 05:17:42.986Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:17:50.541Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-27 05:17:58.669Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-27 05:18:00.901Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-09-27 05:18:21.460Z focus
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:21.682Z click
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:21.692Z change
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:23.133Z click
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:23.135Z change
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:23.958Z click
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:23.960Z change
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:26.155Z blur
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:26.380Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Export Selected (1)"}

## 2026-09-27 05:18:26.387Z click
- element: {"tag":"a","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-27 05:18:29.570Z click
- element: {"tag":"td","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":""}

## 2026-09-27 05:18:30.645Z focus
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:30.872Z click
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:30.874Z change
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:54.106Z blur
- element: {"tag":"input","role":null,"ariaLabel":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","name":null,"type":"checkbox","id":null,"placeholder":null,"label":"Select row 131ba681-1607-47b5-b4ba-f8e358dabbf7","value":"on","valueLength":2,"text":""}

## 2026-09-27 05:18:54.324Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-09-27 05:18:55.775Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-09-27 05:18:57.138Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-09-27 05:18:58.186Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:18:59.168Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:19:00.568Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-09-27 05:19:02.501Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 05:19:04.150Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-09-27 05:19:04.162Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 7

## 2026-09-27 05:19:04.162Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-09-27 05:19:05.341Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-09-27 06:11:05.693Z load
- url: http://localhost:3000/dashboard

## 2026-09-27 06:11:12.851Z navigate
- url: http://localhost:3000/login
- via: replaceState

## 2026-09-27 06:41:14.427Z load
- url: http://localhost:3000/login

## 2026-09-27 06:52:09.480Z load
- url: http://localhost:3000/login

## 2026-09-27 06:52:50.250Z load
- url: http://localhost:3000/login

## 2026-09-27 06:53:50.140Z load
- url: http://localhost:3000/login

## 2026-09-27 06:56:06.976Z load
- url: http://localhost:3000/login

## 2026-09-27 06:57:51.784Z load
- url: http://localhost:3000/login

## 2026-09-27 07:00:55.686Z load
- url: http://localhost:3000/login

## 2026-09-27 07:03:53.239Z load
- url: http://localhost:3000/login

## 2026-09-27 07:03:56.521Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-27 07:03:56.525Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 07:03:56.526Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 07:03:56.526Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-27 07:03:56.527Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 07:03:56.529Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 07:03:56.736Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 07:03:56.742Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-09-27 07:03:57.122Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-27 07:03:57.238Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-27 07:03:57.241Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 07:03:57.241Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 07:03:57.241Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-27 07:03:57.242Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 07:03:57.243Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 07:04:00.030Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 07:04:00.031Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-27 07:04:14.601Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Total Pickups2Total Weight20.00 KgTotal Earnings₹ 0Pending Payouts₹ 1,240Total Volume Amount₹1,240Across 2 payment recordsTotal Paid / Settled₹0Successfully cleared transactionsPending Disbursements₹1,240Awaiting processing or cash clearanceAll StatusesPaid / SuccessPendingAll ModesUPICashBank TransferCardtoExport CSVTransaction IDMaterialWeightAmountPayment StatusPayment ModeDistrictUser EmailDate & TimeTXN-1789122165771Aluminium Cans10 kg₹1,100PendingOnlineChennaidhanapaul2020@gmail.com11/9/2026, 3:52:45 pmTXN-OLD-93ec499a-346f-48f6-94bf-112fc64e900cMixed Paper10 kg₹140PendingOnline / CashChennaidhanapaul2020@gmail.com10/9/2026, 8:28:34 pmShowing 1 to 2 of 2 entries (Live Synced) PreviousPage 1 of 1Next ReLoop Scrap Management · live database · 2026"}

## 2026-09-27 07:05:58.250Z load
- url: http://localhost:3000/dashboard

## 2026-09-27 07:05:58.487Z navigate
- url: http://localhost:3000/login
- via: replaceState

## 2026-09-27 07:06:58.137Z load
- url: http://localhost:3000/login

## 2026-09-27 07:07:18.447Z load
- url: http://localhost:3000/login

## 2026-09-27 07:07:43.483Z load
- url: http://localhost:3000/login

## 2026-09-27 07:07:58.069Z load
- url: http://localhost:3000/login

## 2026-09-27 07:08:38.626Z load
- url: http://localhost:3000/login

## 2026-09-27 07:08:58.064Z load
- url: http://localhost:3000/login

## 2026-09-27 07:09:58.167Z load
- url: http://localhost:3000/login

## 2026-09-27 07:11:32.395Z load
- url: http://localhost:3000/login

## 2026-09-27 07:11:58.240Z load
- url: http://localhost:3000/login

## 2026-09-27 07:12:08.866Z load
- url: http://localhost:3000/login

## 2026-09-27 07:12:18.911Z load
- url: http://localhost:3000/login

## 2026-09-27 07:13:39.023Z load
- url: http://localhost:3000/login

## 2026-09-27 07:13:58.075Z load
- url: http://localhost:3000/login

## 2026-09-27 07:14:49.178Z load
- url: http://localhost:3000/login

## 2026-09-27 07:14:58.067Z load
- url: http://localhost:3000/login

## 2026-09-27 07:15:14.175Z load
- url: http://localhost:3000/login

## 2026-09-27 07:15:58.106Z load
- url: http://localhost:3000/login

## 2026-09-27 07:16:29.378Z load
- url: http://localhost:3000/login

## 2026-09-27 07:16:54.322Z load
- url: http://localhost:3000/login

## 2026-09-27 07:17:24.417Z load
- url: http://localhost:3000/login

## 2026-09-27 07:17:44.394Z load
- url: http://localhost:3000/login

## 2026-09-27 07:18:24.493Z load
- url: http://localhost:3000/login

## 2026-09-27 07:18:49.483Z load
- url: http://localhost:3000/login

## 2026-09-27 11:26:13.096Z load
- url: http://localhost:3000/

## 2026-09-27 11:26:13.214Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-09-27 11:27:06.626Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-09-27 11:27:06.628Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-09-27 11:27:06.799Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-09-27 11:27:06.808Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 11:27:06.808Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-09-27 11:27:06.809Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-09-27 11:27:06.813Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 11:27:06.814Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-09-27 11:27:08.607Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-09-27 11:27:08.610Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-09-27 11:27:08.652Z network.error
- method: POST
- url: http://localhost:5000/api/login
- requestBody: {"email":"dhanapaul2020@gmail.com","password":"[redacted:length=9]"}
- message: Failed to fetch
- durationMs: 41

## 2026-09-27 11:27:08.653Z console.error
- text: 
    TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-09-27 11:27:08.654Z console.error
- text: 
    Login error: TypeError: Failed to fetch
        at window.fetch (http://localhost:3000/@id/virtual:session-journal-client:328:28)
        at window.fetch (http://localhost:3000/:491:23)
        at handleSubmit (http://localhost:3000/src/pages/LoginPage.jsx:28:30)
        at HTMLUnknownElement.callCallback2 (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3680:22)
        at Object.invokeGuardedCallbackDev (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3705:24)
        at invokeGuardedCallback (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3739:39)
        at invokeGuardedCallbackAndCatchFirstError (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:3742:33)
        at executeDispatch (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7046:11)
        at processDispatchQueueItemsInOrder (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7066:15)
        at processDispatchQueue (http://localhost:3000/node_modules/.vite/deps/chunk-W3YG3FEU.js?v=c806b173:7075:13)

## 2026-10-12 08:04:02.336Z load
- url: http://localhost:3000/

## 2026-10-12 08:04:02.792Z navigate
- url: http://localhost:3000/
- via: replaceState

## 2026-10-12 08:04:13.847Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Go to Dashboard"}

## 2026-10-12 08:04:13.853Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-10-12 08:04:14.019Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-10-12 08:04:14.028Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-10-12 08:04:14.029Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-10-12 08:04:14.030Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-10-12 08:04:14.032Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-10-12 08:04:14.032Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-10-12 08:04:16.222Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-10-12 08:04:16.228Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-10-12 08:04:27.088Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-10-12 08:04:57.632Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-10-12 08:05:01.779Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-10-12 08:05:30.318Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-10-12 08:05:33.580Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-10-12 08:05:37.723Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-10-12 08:05:43.569Z focus
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Chennai","valueLength":7,"text":"ChennaiCoimbatoreMaduraiSalemTrichyTirunelveliErodeVelloreThanjavurDindigul"}

## 2026-10-12 08:05:43.785Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Chennai","valueLength":7,"text":"ChennaiCoimbatoreMaduraiSalemTrichyTirunelveliErodeVelloreThanjavurDindigul"}

## 2026-10-12 08:05:44.510Z click
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Chennai","valueLength":7,"text":"ChennaiCoimbatoreMaduraiSalemTrichyTirunelveliErodeVelloreThanjavurDindigul"}

## 2026-10-12 08:05:45.705Z blur
- element: {"tag":"select","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":"[select]","value":"Chennai","valueLength":7,"text":"ChennaiCoimbatoreMaduraiSalemTrichyTirunelveliErodeVelloreThanjavurDindigul"}

## 2026-10-12 08:05:45.706Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Enter complete address with landmark","label":"Enter complete address with landmark","value":"","valueLength":0,"text":""}

## 2026-10-12 08:05:45.932Z click
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"text","id":null,"placeholder":"Enter complete address with landmark","label":"Enter complete address with landmark","value":"","valueLength":0,"text":""}

## 2026-10-12 08:05:47.079Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Total Pickups2Total Weight20.00 KgTotal Earnings₹ 0Pending Payouts₹ 1,240Schedule New Scrap PickupSelect material type, district and weight to lock in your scrap value instantly.Scrap Material TypeMixed Paper (₹14/kg)PET Bottles (₹22/kg)Aluminium Cans (₹110/kg)E-waste (₹85/kg)Iron Scrap (₹28/kg)Cardboard (₹16/kg)Copper Wire (₹450/kg)HDPE Drums (₹35/kg)Glass Cullet (₹6/kg)Brass Fittings (₹320/kg)Weight (kg)Select DistrictChennaiCoimbatoreMaduraiSalemTrichyTirunelveliErodeVelloreThanjavurDindigulPickup Address / Hub LocationCalculated Fixed Scrap Value140Rate: ₹14/kgConfirm and Schedule PickupReLoop Scrap Management · live database · 2026"}

## 2026-10-12 08:05:51.677Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-10-12 08:05:54.026Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-10-12 08:05:55.091Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-10-12 08:05:56.369Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-10-12 08:05:57.682Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-10-12 08:06:40.586Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-10-12 08:06:41.710Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-10-12 08:06:43.476Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-10-12 08:06:52.892Z click
- element: {"tag":"td","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Online"}

## 2026-10-12 08:07:06.252Z click
- element: {"tag":"span","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Pending"}

## 2026-10-12 08:07:09.002Z click
- element: {"tag":"div","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History & Past IncomeComplete breakdown of past earnings, credited payouts, and pending amountsComplete breakdown of past earnings, credited payouts, and pending amounts"}

## 2026-10-12 08:07:11.816Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-10-12 08:07:17.976Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-10-12 08:07:22.753Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-10-12 08:07:22.789Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 29

## 2026-10-12 08:07:22.790Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-10-12 08:09:24.673Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-10-12 08:09:27.027Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-10-12 08:09:28.865Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-10-12 08:09:31.815Z click
- element: {"tag":"aside","role":null,"ariaLabel":null,"name":null,"type":null,"id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"ReLoopScrap ManagementSigned in asIndividualdhanapaul2020@gmail.comDashboardSell Your ScrapCollection LogPayment HistoryCompliance ReportsArea ManagementSettingsSign out"}

## 2026-10-12 08:09:32.851Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-10-12 08:09:34.427Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sell Your Scrap"}

## 2026-10-12 08:09:36.250Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Collection Log"}

## 2026-10-12 08:09:39.430Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Payment History"}

## 2026-10-12 08:09:40.587Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Compliance Reports"}

## 2026-10-12 08:09:42.082Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Area Management"}

## 2026-10-12 08:09:43.251Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Settings"}

## 2026-10-12 08:09:43.261Z network.error
- method: GET
- url: http://localhost:5000/api/hubs
- status: 404
- statusText: Not Found
- response: 
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <title>Error</title>
    </head>
    <body>
    <pre>Cannot GET /api/hubs</pre>
    </body>
    </html>
    
- durationMs: 7

## 2026-10-12 08:09:43.261Z console.error
- text: 
    Error fetching hubs: SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        at fetchData (http://localhost:3000/src/components/scrap/SettingsView.jsx:25:36)

## 2026-10-12 08:09:45.715Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"button","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Dashboard"}

## 2026-10-12 08:23:50.779Z load
- url: http://localhost:3000/dashboard

## 2026-10-12 08:23:51.198Z navigate
- url: http://localhost:3000/login
- via: replaceState

## 2026-10-12 08:23:53.841Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-10-12 08:23:53.848Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-10-12 08:23:53.849Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-10-12 08:23:53.849Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-10-12 08:23:53.851Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-10-12 08:23:53.851Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-10-12 08:23:54.068Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-10-12 08:23:54.075Z submit
- action: http://localhost:3000/login
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false}]

## 2026-10-12 08:23:54.428Z navigate
- url: http://localhost:3000/dashboard
- via: pushState

## 2026-10-12 08:23:54.549Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"","valueLength":0,"text":""}

## 2026-10-12 08:23:54.552Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-10-12 08:23:54.552Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"email","id":"email","placeholder":"you@scrapflow.in","label":"Work email","value":"dhanapaul2020@gmail.com","valueLength":23,"text":""}

## 2026-10-12 08:23:54.552Z focus
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=0]","valueLength":0,"text":""}

## 2026-10-12 08:23:54.555Z change
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-10-12 08:23:54.555Z blur
- element: {"tag":"input","role":null,"ariaLabel":null,"name":null,"type":"password","id":"password","placeholder":"Enter password","label":"Password","value":"[redacted:length=9]","valueLength":9,"text":""}

## 2026-10-12 08:23:56.229Z click
- element: {"tag":"button","role":null,"ariaLabel":null,"name":null,"type":"submit","id":null,"placeholder":null,"label":null,"value":null,"valueLength":0,"text":"Sign in"}

## 2026-10-12 08:23:56.230Z submit
- action: http://localhost:3000/dashboard
- fields: [{"label":"Work email","type":"email","value":"dhanapaul2020@gmail.com","length":23,"redacted":false},{"label":"Password","type":"password","value":"[redacted:length=9]","length":9,"redacted":true},{"label":"Show password","type":"button","value":"","length":0,"redacted":false},{"label":"[submit]","type":"submit","value":"","length":0,"redacted":false},{"label":"[button]","type":"button","value":"","length":0,"redacted":false}]

## 2026-10-12 08:27:01.875Z load
- url: http://localhost:3000/dashboard

## 2026-10-12 08:27:02.370Z navigate
- url: http://localhost:3000/login
- via: replaceState

## 2026-10-12 08:28:01.089Z load
- url: http://localhost:3000/login

## 2026-10-12 08:29:00.992Z load
- url: http://localhost:3000/login

## 2026-10-12 08:29:31.625Z load
- url: http://localhost:3000/login

## 2026-10-12 08:30:01.080Z load
- url: http://localhost:3000/login

## 2026-10-12 08:31:01.030Z load
- url: http://localhost:3000/login

## 2026-10-12 08:32:01.400Z load
- url: http://localhost:3000/login

## 2026-10-12 08:33:01.025Z load
- url: http://localhost:3000/login

## 2026-10-12 08:34:01.060Z load
- url: http://localhost:3000/login

## 2026-10-12 08:35:01.057Z load
- url: http://localhost:3000/login

