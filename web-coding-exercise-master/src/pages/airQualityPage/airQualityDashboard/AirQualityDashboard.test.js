import React from 'react';
import AirQualityDashboard from './AirQualityDashboard';
import renderer from 'react-test-renderer';

describe("AirQualityDashboard", () => {
    it("renders as expected", () => {
        const feeds = [{ "aqi": 27, "idx": 3092, "attributions": [{ "url": "http://www.airparif.asso.fr/", "name": "AirParif - Association de surveillance de la qualité de l'air en Île-de-France", "logo": "Paris-Air-Parif.png" }, { "url": "https://waqi.info/", "name": "World Air Quality Index Project" }], "city": { "geo": [48.8704, 2.33241], "name": "Place De Lopera, Paris", "url": "https://aqicn.org/city/france/paris/place-de-lopera" }, "dominentpol": "pm25", "iaqi": { "co": { "v": 0.1 }, "h": { "v": 83 }, "no2": { "v": 16.1 }, "o3": { "v": 20.4 }, "p": { "v": 1018.8 }, "pm10": { "v": 16 }, "pm25": { "v": 27 }, "so2": { "v": 0.6 }, "t": { "v": 13.8 }, "w": { "v": 1.4 }, "wg": { "v": 7.8 } }, "time": { "s": "2020-10-08 00:00:00", "tz": "+02:00", "v": 1602115200, "iso": "2020-10-08T00:00:00+02:00" }, "forecast": { "daily": { "o3": [{ "avg": 20, "day": "2020-10-07", "max": 33, "min": 10 }, { "avg": 20, "day": "2020-10-08", "max": 26, "min": 14 }, { "avg": 15, "day": "2020-10-09", "max": 29, "min": 5 }, { "avg": 20, "day": "2020-10-10", "max": 29, "min": 15 }, { "avg": 13, "day": "2020-10-11", "max": 14, "min": 13 }], "pm10": [{ "avg": 12, "day": "2020-10-07", "max": 14, "min": 8 }, { "avg": 9, "day": "2020-10-08", "max": 15, "min": 7 }, { "avg": 12, "day": "2020-10-09", "max": 17, "min": 8 }, { "avg": 9, "day": "2020-10-10", "max": 12, "min": 6 }, { "avg": 11, "day": "2020-10-11", "max": 11, "min": 9 }], "pm25": [{ "avg": 26, "day": "2020-10-07", "max": 42, "min": 15 }, { "avg": 24, "day": "2020-10-08", "max": 35, "min": 18 }, { "avg": 40, "day": "2020-10-09", "max": 57, "min": 21 }, { "avg": 25, "day": "2020-10-10", "max": 35, "min": 12 }, { "avg": 33, "day": "2020-10-11", "max": 37, "min": 33 }], "uvi": [{ "avg": 0, "day": "2020-10-07", "max": 1, "min": 0 }, { "avg": 0, "day": "2020-10-08", "max": 1, "min": 0 }, { "avg": 0, "day": "2020-10-09", "max": 1, "min": 0 }, { "avg": 0, "day": "2020-10-10", "max": 2, "min": 0 }, { "avg": 0, "day": "2020-10-11", "max": 2, "min": 0 }, { "avg": 0, "day": "2020-10-12", "max": 2, "min": 0 }] } }, "debug": { "sync": "2020-10-08T07:57:49+09:00" } }, { "aqi": 12, "idx": 5722, "attributions": [{ "url": "http://www.airparif.asso.fr/", "name": "AirParif - Association de surveillance de la qualité de l'air en Île-de-France", "logo": "Paris-Air-Parif.png" }, { "url": "https://waqi.info/", "name": "World Air Quality Index Project" }], "city": { "geo": [48.856614, 2.3522219], "name": "Paris", "url": "https://aqicn.org/city/paris" }, "dominentpol": "pm10", "iaqi": { "co": { "v": 0.1 }, "h": { "v": 89 }, "no2": { "v": 5.4 }, "o3": { "v": 18 }, "p": { "v": 1017.2 }, "pm10": { "v": 12 }, "pm25": { "v": 25 }, "so2": { "v": 0.2 }, "t": { "v": 14.4 }, "w": { "v": 3.2 } }, "time": { "s": "2020-10-08 07:00:00", "tz": "+02:00", "v": 1602140400, "iso": "2020-10-08T07:00:00+02:00" }, "forecast": { "daily": { "o3": [{ "avg": 20, "day": "2020-10-07", "max": 33, "min": 10 }, { "avg": 20, "day": "2020-10-08", "max": 26, "min": 14 }, { "avg": 15, "day": "2020-10-09", "max": 29, "min": 5 }, { "avg": 20, "day": "2020-10-10", "max": 29, "min": 15 }, { "avg": 13, "day": "2020-10-11", "max": 14, "min": 13 }], "pm10": [{ "avg": 12, "day": "2020-10-07", "max": 14, "min": 8 }, { "avg": 9, "day": "2020-10-08", "max": 15, "min": 7 }, { "avg": 12, "day": "2020-10-09", "max": 17, "min": 8 }, { "avg": 9, "day": "2020-10-10", "max": 12, "min": 6 }, { "avg": 11, "day": "2020-10-11", "max": 11, "min": 9 }], "pm25": [{ "avg": 26, "day": "2020-10-07", "max": 42, "min": 15 }, { "avg": 24, "day": "2020-10-08", "max": 35, "min": 18 }, { "avg": 40, "day": "2020-10-09", "max": 57, "min": 21 }, { "avg": 25, "day": "2020-10-10", "max": 35, "min": 12 }, { "avg": 33, "day": "2020-10-11", "max": 37, "min": 33 }], "uvi": [{ "avg": 0, "day": "2020-10-07", "max": 1, "min": 0 }, { "avg": 0, "day": "2020-10-08", "max": 1, "min": 0 }, { "avg": 0, "day": "2020-10-09", "max": 1, "min": 0 }, { "avg": 0, "day": "2020-10-10", "max": 2, "min": 0 }, { "avg": 0, "day": "2020-10-11", "max": 2, "min": 0 }, { "avg": 0, "day": "2020-10-12", "max": 2, "min": 0 }] } }, "debug": { "sync": "2020-10-08T14:22:46+09:00" } }]
        const tree = renderer
            .create(<AirQualityDashboard feeds={feeds} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    })
})
