import React from 'react';
import * as R from 'ramda';
import 'tachyons';
import withState from '../../utils/withState';
import { fetchAirQuality } from '../../api/airQualityAPI';
import CitySearchSideBar from '../../common/citySearchSideBar/CitySearchSideBar';
import AirQualityDashboard from '../airQualityPage/airQualityDashboard/AirQualityDashboard';
import PropTypes from 'prop-types';


const AirQualityPage = ({
    feeds, setFeeds,
}) => {
    const addFeed = (feed) => {
        setFeeds([feed, ...feeds]);
    }
    const removeFeed = (uid) => {
        const updatedFeedList = feeds.filter(feed => feed.idx !== uid);
        setFeeds(updatedFeedList);
    }

    const onLocationSelected = (uid, selected) => {
        if (selected) {
            fetchAirQuality(uid, addFeed)
        }
        else {
            removeFeed(uid);
        }
    }

    const onNewSearch = () => setFeeds([]);

    return (
        // eslint-disable-next-line react/jsx-filename-extension
        <div className="flex flex-column">
            <header className="f2 pv3 ph4 bg-light-purple white flex-grow-0 flex-shrink-0">
                Air Quality Index
            </header>
            <div className="cf pa5 flex-grow-1 flex-shrink-0 flex items-start">
                <div className="fl w-28 tc">
                    <CitySearchSideBar onLocationSelected={onLocationSelected} onRefreshData={onNewSearch} />
                </div>
                <div className="fl w-72 tc">
                    <AirQualityDashboard feeds={feeds} />
                </div>
            </div>
        </div>)
}

AirQualityPage.propTypes = {
    feeds: PropTypes.array.isRequired,
    setFeeds: PropTypes.func.isRequired
}

export default R.compose(
    withState('feeds', 'setFeeds', [])
)(AirQualityPage);
