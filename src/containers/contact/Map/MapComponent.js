import React, { Component } from 'react';
    import 'ol/ol.css';
    import ol from 'ol';
    /* import Map from 'ol/map';
    import View from 'ol/view';
    import Tile from 'ol/layer/tile'; */


    class MapComponent extends Component {

        componentDidMount() {
            var map = new ol.Map({
                view: new ol.View({
                    center: [0, 0],
                    zoom: 1
                }),
                /* layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ], */
                target: 'map'
            });
        }
        render() {

            return (
                <div id="map"></div>
            )
        }
    }

export default MapComponent;