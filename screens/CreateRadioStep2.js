import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,FlatList} from 'react-native';

import { ListItem,Button,ButtonGroup } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Swype';

import police from '../screens/components/font';

import { TextField } from 'react-native-material-textfield';

import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

function CreateRadio2(props) {

const [radioName, setRadioName] = useState()

const [send, setSender] = useState(false);


/* Spotify : Get playlist informations */
let listPlaylistFromSpotifiy = {
    "href": "https://api.spotify.com/v1/users/1127664154/playlists?offset=0&limit=20",
    "items": [
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1Ts6GeiD5o29GYaYyFZZ4q"
            },
            "href": "https://api.spotify.com/v1/playlists/1Ts6GeiD5o29GYaYyFZZ4q",
            "id": "1Ts6GeiD5o29GYaYyFZZ4q",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b273038f2f51ac3a4bd38dee58a6ab67616d0000b2731e0f8284a6b77f174bb58e77ab67616d0000b2734d86115c1bc917d78c7f0dbdab67616d0000b273ec71e12a22d3052e5f438445",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b273038f2f51ac3a4bd38dee58a6ab67616d0000b2731e0f8284a6b77f174bb58e77ab67616d0000b2734d86115c1bc917d78c7f0dbdab67616d0000b273ec71e12a22d3052e5f438445",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b273038f2f51ac3a4bd38dee58a6ab67616d0000b2731e0f8284a6b77f174bb58e77ab67616d0000b2734d86115c1bc917d78c7f0dbdab67616d0000b273ec71e12a22d3052e5f438445",
                    "width": 60
                }
            ],
            "name": "AKAppella",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MTEsOGIwZTJlNThlMzM0YjczODllOWMyNjZlZWQ3MjVjYTBhOGY3NzE0Mg==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1Ts6GeiD5o29GYaYyFZZ4q/tracks",
                "total": 10
            },
            "type": "playlist",
            "uri": "spotify:playlist:1Ts6GeiD5o29GYaYyFZZ4q"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1kMdO8eIX3AJgQlbtTRqsf"
            },
            "href": "https://api.spotify.com/v1/playlists/1kMdO8eIX3AJgQlbtTRqsf",
            "id": "1kMdO8eIX3AJgQlbtTRqsf",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2730d446d11140e3cddbefcb25dab67616d0000b273a2f118f11ba8c400781a23fcab67616d0000b273b65d7723d530449ee39786f0ab67616d0000b273de9caec0e92afe49dabda35a",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2730d446d11140e3cddbefcb25dab67616d0000b273a2f118f11ba8c400781a23fcab67616d0000b273b65d7723d530449ee39786f0ab67616d0000b273de9caec0e92afe49dabda35a",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2730d446d11140e3cddbefcb25dab67616d0000b273a2f118f11ba8c400781a23fcab67616d0000b273b65d7723d530449ee39786f0ab67616d0000b273de9caec0e92afe49dabda35a",
                    "width": 60
                }
            ],
            "name": "Bossa",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MTksNWY2MjhmNWQ4NmMxZDc2Y2I0OWY1MjVlYmQ1MDkyOWNkZmM0OWVhMw==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1kMdO8eIX3AJgQlbtTRqsf/tracks",
                "total": 18
            },
            "type": "playlist",
            "uri": "spotify:playlist:1kMdO8eIX3AJgQlbtTRqsf"
        },
        {
            "collaborative": false,
            "description": "Mellow jazz to stay focused or unwind.",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/37i9dQZF1DX2vYju3i0lNX"
            },
            "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2vYju3i0lNX",
            "id": "37i9dQZF1DX2vYju3i0lNX",
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706f00000002bf586e7899a59fe5988c48b4",
                    "width": null
                }
            ],
            "name": "Chilled Jazz",
            "owner": {
                "display_name": "Spotify",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/spotify"
                },
                "href": "https://api.spotify.com/v1/users/spotify",
                "id": "spotify",
                "type": "user",
                "uri": "spotify:user:spotify"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTU5MTEwMDczMiwwMDAwMDA1MTAwMDAwMTcyNzRmZTc1YTUwMDAwMDE3MGM0OTZhZTBk",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DX2vYju3i0lNX/tracks",
                "total": 135
            },
            "type": "playlist",
            "uri": "spotify:playlist:37i9dQZF1DX2vYju3i0lNX"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1BuPtcowCGYMrjw9ZkE4O5"
            },
            "href": "https://api.spotify.com/v1/playlists/1BuPtcowCGYMrjw9ZkE4O5",
            "id": "1BuPtcowCGYMrjw9ZkE4O5",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731061524b7fe4e944c74173ebab67616d0000b2731c07868248885ea7d8376039ab67616d0000b27365e00cb777e7dc6afb575dedab67616d0000b273b61206f3153e9037a22dd32d",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731061524b7fe4e944c74173ebab67616d0000b2731c07868248885ea7d8376039ab67616d0000b27365e00cb777e7dc6afb575dedab67616d0000b273b61206f3153e9037a22dd32d",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731061524b7fe4e944c74173ebab67616d0000b2731c07868248885ea7d8376039ab67616d0000b27365e00cb777e7dc6afb575dedab67616d0000b273b61206f3153e9037a22dd32d",
                    "width": 60
                }
            ],
            "name": "Classic Chill",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MjEsYjlmNDk3ZTZlZjA5ZDE0MzNhOGM3ZmZjN2RiYTgxOTY4MTczMjU1Ng==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1BuPtcowCGYMrjw9ZkE4O5/tracks",
                "total": 19
            },
            "type": "playlist",
            "uri": "spotify:playlist:1BuPtcowCGYMrjw9ZkE4O5"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/5SAeDWG1rCLdoY4yj0FaEC"
            },
            "href": "https://api.spotify.com/v1/playlists/5SAeDWG1rCLdoY4yj0FaEC",
            "id": "5SAeDWG1rCLdoY4yj0FaEC",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2730bdce327ef51b0ecac1f1797ab67616d0000b273564b140043e21d94f0f79c09ab67616d0000b2736d138e3ced14eb7a266aa6d2ab67616d0000b273855f340a32265cf001077a15",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2730bdce327ef51b0ecac1f1797ab67616d0000b273564b140043e21d94f0f79c09ab67616d0000b2736d138e3ced14eb7a266aa6d2ab67616d0000b273855f340a32265cf001077a15",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2730bdce327ef51b0ecac1f1797ab67616d0000b273564b140043e21d94f0f79c09ab67616d0000b2736d138e3ced14eb7a266aa6d2ab67616d0000b273855f340a32265cf001077a15",
                    "width": 60
                }
            ],
            "name": "Hardouse",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MTAsYWRiOGU2NjY0NTc4YWRjZjU1NWNlMzBiZTlkN2EzNmEwMDYwMTUwMg==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/5SAeDWG1rCLdoY4yj0FaEC/tracks",
                "total": 9
            },
            "type": "playlist",
            "uri": "spotify:playlist:5SAeDWG1rCLdoY4yj0FaEC"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/3Yx9sZfK4K8JBV9yRd5gMM"
            },
            "href": "https://api.spotify.com/v1/playlists/3Yx9sZfK4K8JBV9yRd5gMM",
            "id": "3Yx9sZfK4K8JBV9yRd5gMM",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731319b036dcc379ac8643a4c9ab67616d0000b2732e2c2803f18f4dbe54936876ab67616d0000b273f507ddf8552ab13e5b3deea5b5d9bd07445bed63ffbd3b078ed664f51d10999f",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731319b036dcc379ac8643a4c9ab67616d0000b2732e2c2803f18f4dbe54936876ab67616d0000b273f507ddf8552ab13e5b3deea5b5d9bd07445bed63ffbd3b078ed664f51d10999f",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731319b036dcc379ac8643a4c9ab67616d0000b2732e2c2803f18f4dbe54936876ab67616d0000b273f507ddf8552ab13e5b3deea5b5d9bd07445bed63ffbd3b078ed664f51d10999f",
                    "width": 60
                }
            ],
            "name": "Soulful House Funky House & Classics Steve Adams Dic2018",
            "owner": {
                "display_name": "jhgahny",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/jhgahny"
                },
                "href": "https://api.spotify.com/v1/users/jhgahny",
                "id": "jhgahny",
                "type": "user",
                "uri": "spotify:user:jhgahny"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MjAsNmQ3NmUxNjJlYTgwOWYzNjVhYzNkNTg0ZWZkNGE1NmYwN2YzNjBjYg==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/3Yx9sZfK4K8JBV9yRd5gMM/tracks",
                "total": 19
            },
            "type": "playlist",
            "uri": "spotify:playlist:3Yx9sZfK4K8JBV9yRd5gMM"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/3okbmaRxOgoCn36JVt7tVp"
            },
            "href": "https://api.spotify.com/v1/playlists/3okbmaRxOgoCn36JVt7tVp",
            "id": "3okbmaRxOgoCn36JVt7tVp",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2732a51ba9d25ebff1de3032867ab67616d0000b273752be999fce3c3ea5ee48643ab67616d0000b27385f2f5754dedf35fd21edd7eab67616d0000b27398768b94fbe8ddda2dd87d9c",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2732a51ba9d25ebff1de3032867ab67616d0000b273752be999fce3c3ea5ee48643ab67616d0000b27385f2f5754dedf35fd21edd7eab67616d0000b27398768b94fbe8ddda2dd87d9c",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2732a51ba9d25ebff1de3032867ab67616d0000b273752be999fce3c3ea5ee48643ab67616d0000b27385f2f5754dedf35fd21edd7eab67616d0000b27398768b94fbe8ddda2dd87d9c",
                    "width": 60
                }
            ],
            "name": "Raygae",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MTEsMjY5MTg2Y2EwYzExZWZlMjFkNGRjZjExNWVhYjgwYThkNTAzNjdmNQ==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/3okbmaRxOgoCn36JVt7tVp/tracks",
                "total": 10
            },
            "type": "playlist",
            "uri": "spotify:playlist:3okbmaRxOgoCn36JVt7tVp"
        },
        {
            "collaborative": false,
            "description": "Only Glitch Hop, Dubstep and related madness.",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/4Y0aoy9l5vCbp4n2TOuYif"
            },
            "href": "https://api.spotify.com/v1/playlists/4Y0aoy9l5vCbp4n2TOuYif",
            "id": "4Y0aoy9l5vCbp4n2TOuYif",
            "images": [
                {
                    "height": null,
                    "url": "https://i.scdn.co/image/ab67706c0000da84c9db3330d884c134960db923",
                    "width": null
                }
            ],
            "name": "Glitch Hop",
            "owner": {
                "display_name": "Max te Laak",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/bananakuba"
                },
                "href": "https://api.spotify.com/v1/users/bananakuba",
                "id": "bananakuba",
                "type": "user",
                "uri": "spotify:user:bananakuba"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MzM3LDc4ZWNhYjZhNTBkZjkwYzI2MGU1ODBlNTljZjlhNTU2M2Y1M2FkOTA=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/4Y0aoy9l5vCbp4n2TOuYif/tracks",
                "total": 101
            },
            "type": "playlist",
            "uri": "spotify:playlist:4Y0aoy9l5vCbp4n2TOuYif"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/6KbsN9Cfk6hHtnx4NiaWAS"
            },
            "href": "https://api.spotify.com/v1/playlists/6KbsN9Cfk6hHtnx4NiaWAS",
            "id": "6KbsN9Cfk6hHtnx4NiaWAS",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2732e92f776279eaf45d14a33fdab67616d0000b2737a7e346587596ca71fa8f4a1ab67616d0000b273c30e3fe7ac8b94aa3d803fd1ab67616d0000b273f4e825f885daff79ad87859a",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2732e92f776279eaf45d14a33fdab67616d0000b2737a7e346587596ca71fa8f4a1ab67616d0000b273c30e3fe7ac8b94aa3d803fd1ab67616d0000b273f4e825f885daff79ad87859a",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2732e92f776279eaf45d14a33fdab67616d0000b2737a7e346587596ca71fa8f4a1ab67616d0000b273c30e3fe7ac8b94aa3d803fd1ab67616d0000b273f4e825f885daff79ad87859a",
                    "width": 60
                }
            ],
            "name": "favoris",
            "owner": {
                "display_name": "zackpathou",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/zackpathou"
                },
                "href": "https://api.spotify.com/v1/users/zackpathou",
                "id": "zackpathou",
                "type": "user",
                "uri": "spotify:user:zackpathou"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MTU2LDBjMzAyOTk1MmYwNjNkMGVkNjJkM2Q3YWU5ZjEzNWY0N2Q3ZmZjMWM=",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/6KbsN9Cfk6hHtnx4NiaWAS/tracks",
                "total": 106
            },
            "type": "playlist",
            "uri": "spotify:playlist:6KbsN9Cfk6hHtnx4NiaWAS"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1l8cbDtnfxs2fuI4r8MG2K"
            },
            "href": "https://api.spotify.com/v1/playlists/1l8cbDtnfxs2fuI4r8MG2K",
            "id": "1l8cbDtnfxs2fuI4r8MG2K",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b27343237c122eb32ad0cba34b0aab67616d0000b2734e24f7d0cf3b58922d3a75d8ab67616d0000b2735843cc4417dc0ab7d130d011ab67616d0000b2738c4e95986c803791125e8991",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b27343237c122eb32ad0cba34b0aab67616d0000b2734e24f7d0cf3b58922d3a75d8ab67616d0000b2735843cc4417dc0ab7d130d011ab67616d0000b2738c4e95986c803791125e8991",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b27343237c122eb32ad0cba34b0aab67616d0000b2734e24f7d0cf3b58922d3a75d8ab67616d0000b2735843cc4417dc0ab7d130d011ab67616d0000b2738c4e95986c803791125e8991",
                    "width": 60
                }
            ],
            "name": "Classic old school",
            "owner": {
                "display_name": "zackpathou",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/zackpathou"
                },
                "href": "https://api.spotify.com/v1/users/zackpathou",
                "id": "zackpathou",
                "type": "user",
                "uri": "spotify:user:zackpathou"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "NjgsYzgwYTFjN2Q3ZTc1Yzc5OTZjMDZjNjU1OWVjNTZlYTk4OGMyYjQ0YQ==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1l8cbDtnfxs2fuI4r8MG2K/tracks",
                "total": 60
            },
            "type": "playlist",
            "uri": "spotify:playlist:1l8cbDtnfxs2fuI4r8MG2K"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/54tjhPDK1w6mlJRvpowr6P"
            },
            "href": "https://api.spotify.com/v1/playlists/54tjhPDK1w6mlJRvpowr6P",
            "id": "54tjhPDK1w6mlJRvpowr6P",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2736999d55e36b6b7a879b6396dab67616d0000b27369ff5ae6985c4e8e8d6f84ffab67616d0000b273dcd9fe1276c16fcdad98c50cab67616d0000b273f52048ccaec7f8e1550250c1",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2736999d55e36b6b7a879b6396dab67616d0000b27369ff5ae6985c4e8e8d6f84ffab67616d0000b273dcd9fe1276c16fcdad98c50cab67616d0000b273f52048ccaec7f8e1550250c1",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2736999d55e36b6b7a879b6396dab67616d0000b27369ff5ae6985c4e8e8d6f84ffab67616d0000b273dcd9fe1276c16fcdad98c50cab67616d0000b273f52048ccaec7f8e1550250c1",
                    "width": 60
                }
            ],
            "name": "HardElec",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MTcsMWMyMTk2MTUxMmY2MWZmYTcyNjQzMTJjNjNhODFmYjczY2FlOTVkOQ==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/54tjhPDK1w6mlJRvpowr6P/tracks",
                "total": 13
            },
            "type": "playlist",
            "uri": "spotify:playlist:54tjhPDK1w6mlJRvpowr6P"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/31uPWAtq1m0dRGLQwzVJpe"
            },
            "href": "https://api.spotify.com/v1/playlists/31uPWAtq1m0dRGLQwzVJpe",
            "id": "31uPWAtq1m0dRGLQwzVJpe",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b27332b19ae70db57adf4d6ad4f4ab67616d0000b2734563b657db96a70b93449cefab67616d0000b27373295f477b9addaab4a4ba79ab67616d0000b273e2e82866210d3d452008f77f",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b27332b19ae70db57adf4d6ad4f4ab67616d0000b2734563b657db96a70b93449cefab67616d0000b27373295f477b9addaab4a4ba79ab67616d0000b273e2e82866210d3d452008f77f",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b27332b19ae70db57adf4d6ad4f4ab67616d0000b2734563b657db96a70b93449cefab67616d0000b27373295f477b9addaab4a4ba79ab67616d0000b273e2e82866210d3d452008f77f",
                    "width": 60
                }
            ],
            "name": "Elecfunky",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MjgsNTk4MzMzMDFmNDdiZDZlYzQ4NGQ1MDI5MzYwZGVmYjIxYjEwYzU0YQ==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/31uPWAtq1m0dRGLQwzVJpe/tracks",
                "total": 26
            },
            "type": "playlist",
            "uri": "spotify:playlist:31uPWAtq1m0dRGLQwzVJpe"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/0RfIGLD8VTUw3u6pG1wwjU"
            },
            "href": "https://api.spotify.com/v1/playlists/0RfIGLD8VTUw3u6pG1wwjU",
            "id": "0RfIGLD8VTUw3u6pG1wwjU",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b27300961dc08e2e6241a504b694ab67616d0000b2736e5e97eec07fb328e4ba9fb9ab67616d0000b273972a2048dcdbd8a356dce361ab67616d0000b273e9a469e5e30e6150d6ceaee0",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b27300961dc08e2e6241a504b694ab67616d0000b2736e5e97eec07fb328e4ba9fb9ab67616d0000b273972a2048dcdbd8a356dce361ab67616d0000b273e9a469e5e30e6150d6ceaee0",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b27300961dc08e2e6241a504b694ab67616d0000b2736e5e97eec07fb328e4ba9fb9ab67616d0000b273972a2048dcdbd8a356dce361ab67616d0000b273e9a469e5e30e6150d6ceaee0",
                    "width": 60
                }
            ],
            "name": "C'est bon",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "NTYsMDRjYzRhZmQwYjQ5ZTZlZWIyNDZjMGFlZjI4YmQ4MGU1MjU5Y2MzYg==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/0RfIGLD8VTUw3u6pG1wwjU/tracks",
                "total": 48
            },
            "type": "playlist",
            "uri": "spotify:playlist:0RfIGLD8VTUw3u6pG1wwjU"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/6ZEQww4dDNJkIhvr2DzCZf"
            },
            "href": "https://api.spotify.com/v1/playlists/6ZEQww4dDNJkIhvr2DzCZf",
            "id": "6ZEQww4dDNJkIhvr2DzCZf",
            "images": [],
            "name": "YouTube",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "MSwxZjRmMjNkMTRjOTExODY3ZTM3MGMwZWU4MmFlODRhNDgxYjU3Mzhm",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/6ZEQww4dDNJkIhvr2DzCZf/tracks",
                "total": 0
            },
            "type": "playlist",
            "uri": "spotify:playlist:6ZEQww4dDNJkIhvr2DzCZf"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/5rQkJyaKpu3m4OLBKMLpMv"
            },
            "href": "https://api.spotify.com/v1/playlists/5rQkJyaKpu3m4OLBKMLpMv",
            "id": "5rQkJyaKpu3m4OLBKMLpMv",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b2737f5ae966dfe207d5d2b5c025ab67616d0000b273ada8d00d23273a097e6df364ab67616d0000b273e2213d84fabb15100c425198",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b2737f5ae966dfe207d5d2b5c025ab67616d0000b273ada8d00d23273a097e6df364ab67616d0000b273e2213d84fabb15100c425198",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b273381371cb8ce680d0dc324600ab67616d0000b2737f5ae966dfe207d5d2b5c025ab67616d0000b273ada8d00d23273a097e6df364ab67616d0000b273e2213d84fabb15100c425198",
                    "width": 60
                }
            ],
            "name": "Cool rock",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "ODMsMDc3YzM5NTE1NjVmM2RhMzkyNWE5NGMzNjhhNTg2ZDZjMDBkZTgwZg==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/5rQkJyaKpu3m4OLBKMLpMv/tracks",
                "total": 75
            },
            "type": "playlist",
            "uri": "spotify:playlist:5rQkJyaKpu3m4OLBKMLpMv"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1mjmlCQUQqriLM1t5vnGJE"
            },
            "href": "https://api.spotify.com/v1/playlists/1mjmlCQUQqriLM1t5vnGJE",
            "id": "1mjmlCQUQqriLM1t5vnGJE",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2731c61618483f2163cf11990f2ab67616d0000b2732d8f80850ebabdc86ea49c89ab67616d0000b2736b3463e7160d333ada4b175aab67616d0000b273bd3b9c3c98f7ec338afbca8f",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2731c61618483f2163cf11990f2ab67616d0000b2732d8f80850ebabdc86ea49c89ab67616d0000b2736b3463e7160d333ada4b175aab67616d0000b273bd3b9c3c98f7ec338afbca8f",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2731c61618483f2163cf11990f2ab67616d0000b2732d8f80850ebabdc86ea49c89ab67616d0000b2736b3463e7160d333ada4b175aab67616d0000b273bd3b9c3c98f7ec338afbca8f",
                    "width": 60
                }
            ],
            "name": "sportivation",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MTgsNjc1OGIwNWUwY2Q5ZTY0OTQzMzExYTQ2ODZmNjg0MjQ2YmExNjlmZA==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1mjmlCQUQqriLM1t5vnGJE/tracks",
                "total": 14
            },
            "type": "playlist",
            "uri": "spotify:playlist:1mjmlCQUQqriLM1t5vnGJE"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/47pg3WJdfEcLckrsigmkUK"
            },
            "href": "https://api.spotify.com/v1/playlists/47pg3WJdfEcLckrsigmkUK",
            "id": "47pg3WJdfEcLckrsigmkUK",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2733d9de37d9217f51dc24f1a53ab67616d0000b2739cd0a4328101c8a169b661f5ab67616d0000b273a057ec26a33fa43a774d3357ab67616d0000b273b80ecbfa6740408bfa9d3fe9",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2733d9de37d9217f51dc24f1a53ab67616d0000b2739cd0a4328101c8a169b661f5ab67616d0000b273a057ec26a33fa43a774d3357ab67616d0000b273b80ecbfa6740408bfa9d3fe9",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2733d9de37d9217f51dc24f1a53ab67616d0000b2739cd0a4328101c8a169b661f5ab67616d0000b273a057ec26a33fa43a774d3357ab67616d0000b273b80ecbfa6740408bfa9d3fe9",
                    "width": 60
                }
            ],
            "name": "us teck",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MjEsNTFlMjBiMDM4ZmM0ODQ3M2M1OTQzNTQwYzM3NmVhMjkxM2U4Zjc4Yg==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/47pg3WJdfEcLckrsigmkUK/tracks",
                "total": 19
            },
            "type": "playlist",
            "uri": "spotify:playlist:47pg3WJdfEcLckrsigmkUK"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/0OsrKbjSoNiNYjKL9ocegZ"
            },
            "href": "https://api.spotify.com/v1/playlists/0OsrKbjSoNiNYjKL9ocegZ",
            "id": "0OsrKbjSoNiNYjKL9ocegZ",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b2730fddbfc5ffd38a79bfbc444bab67616d0000b2731cda3c101a0876e45725c009ab67616d0000b2734acc617cf4fd2eead7c88f96ab67616d0000b27352b9e0f6b4402ca315c606d2",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b2730fddbfc5ffd38a79bfbc444bab67616d0000b2731cda3c101a0876e45725c009ab67616d0000b2734acc617cf4fd2eead7c88f96ab67616d0000b27352b9e0f6b4402ca315c606d2",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b2730fddbfc5ffd38a79bfbc444bab67616d0000b2731cda3c101a0876e45725c009ab67616d0000b2734acc617cf4fd2eead7c88f96ab67616d0000b27352b9e0f6b4402ca315c606d2",
                    "width": 60
                }
            ],
            "name": "Electro swing",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "ODcsNjk3NWE0ZTUzZmEyNzRhMGQyN2JlM2FhZWE2MTVkMTUxMTAxMjFmZA==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/0OsrKbjSoNiNYjKL9ocegZ/tracks",
                "total": 69
            },
            "type": "playlist",
            "uri": "spotify:playlist:0OsrKbjSoNiNYjKL9ocegZ"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/1WH2z5a9oo9iU2nCTfHVDK"
            },
            "href": "https://api.spotify.com/v1/playlists/1WH2z5a9oo9iU2nCTfHVDK",
            "id": "1WH2z5a9oo9iU2nCTfHVDK",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b27301a6faf91e207748e8e32e0aab67616d0000b273063fc4921a6d7fbac76e9bbaab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273dd8a03138c7024a8478eed7e",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b27301a6faf91e207748e8e32e0aab67616d0000b273063fc4921a6d7fbac76e9bbaab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273dd8a03138c7024a8478eed7e",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b27301a6faf91e207748e8e32e0aab67616d0000b273063fc4921a6d7fbac76e9bbaab67616d0000b2736ca5c90113b30c3c43ffb8f4ab67616d0000b273dd8a03138c7024a8478eed7e",
                    "width": 60
                }
            ],
            "name": "Undisputed",
            "owner": {
                "display_name": "Dan Somlo",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/dansomlo"
                },
                "href": "https://api.spotify.com/v1/users/dansomlo",
                "id": "dansomlo",
                "type": "user",
                "uri": "spotify:user:dansomlo"
            },
            "primary_color": null,
            "public": false,
            "snapshot_id": "NzEsNTM3NTRhZjE5YmU5YmVhMGNlN2Q5NTFiZTAwNWMyMDA3ZmNjMTNhOQ==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/1WH2z5a9oo9iU2nCTfHVDK/tracks",
                "total": 59
            },
            "type": "playlist",
            "uri": "spotify:playlist:1WH2z5a9oo9iU2nCTfHVDK"
        },
        {
            "collaborative": false,
            "description": "",
            "external_urls": {
                "spotify": "https://open.spotify.com/playlist/6oOoGoYKQTdB0q2vwEMC9o"
            },
            "href": "https://api.spotify.com/v1/playlists/6oOoGoYKQTdB0q2vwEMC9o",
            "id": "6oOoGoYKQTdB0q2vwEMC9o",
            "images": [
                {
                    "height": 640,
                    "url": "https://mosaic.scdn.co/640/ab67616d0000b273777c5fdae315d921a3784f21ab67616d0000b273b30c8b93cef6fa26f8a7f17aab67616d0000b273f79ed09155e87ba56eeeea2dab67616d0000b273f81891d2e28007ef6b918acd",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://mosaic.scdn.co/300/ab67616d0000b273777c5fdae315d921a3784f21ab67616d0000b273b30c8b93cef6fa26f8a7f17aab67616d0000b273f79ed09155e87ba56eeeea2dab67616d0000b273f81891d2e28007ef6b918acd",
                    "width": 300
                },
                {
                    "height": 60,
                    "url": "https://mosaic.scdn.co/60/ab67616d0000b273777c5fdae315d921a3784f21ab67616d0000b273b30c8b93cef6fa26f8a7f17aab67616d0000b273f79ed09155e87ba56eeeea2dab67616d0000b273f81891d2e28007ef6b918acd",
                    "width": 60
                }
            ],
            "name": "Funk",
            "owner": {
                "display_name": "Matthieu Michon Rossel",
                "external_urls": {
                    "spotify": "https://open.spotify.com/user/1127664154"
                },
                "href": "https://api.spotify.com/v1/users/1127664154",
                "id": "1127664154",
                "type": "user",
                "uri": "spotify:user:1127664154"
            },
            "primary_color": null,
            "public": true,
            "snapshot_id": "MzQsM2NjZWNjM2MzZTU2MzJiZWFmNjNlNzdkYzA3ZmE3YWM0YzlmZGY3ZQ==",
            "tracks": {
                "href": "https://api.spotify.com/v1/playlists/6oOoGoYKQTdB0q2vwEMC9o/tracks",
                "total": 28
            },
            "type": "playlist",
            "uri": "spotify:playlist:6oOoGoYKQTdB0q2vwEMC9o"
        }
    ],
    "limit": 20,
    "next": "https://api.spotify.com/v1/users/1127664154/playlists?offset=20&limit=20",
    "offset": 0,
    "previous": null,
    "total": 33
}

// info globales
let nbPlaylist = listPlaylistFromSpotifiy.total

let listOfPlaylist =[] ;

let infoplaylistGlobal = listPlaylistFromSpotifiy.items // recuperation de la liste de stracks
let infoPlaylist = infoplaylistGlobal.map((info,i)=>{

    let namePlaylist = info.name
    let nbTracks = info.tracks.total
    let spotifyId = info.id
    let type = info.type
    let textDescr = nbTracks + " Tracks"
    let imgPlaylist = 'https://image.freepik.com/vecteurs-libre/illustration-icone-application-musicale_53876-35882.jpg'
    
    if(info.images[0]){
       // console.log(" ------------hello === ", i)
       imgPlaylist = info.images[0].url
    }
   // console.log(namePlaylist)
 listOfPlaylist.push({id:i,name:namePlaylist,text:textDescr,url:imgPlaylist,spotifyId:spotifyId,type:type})

})


/* Recuperation de la recherche depuis spotify */
// q = penitencier , type = Track
let searchOnSpotify ={
    "tracks": {
        "href": "https://api.spotify.com/v1/search?query=penitencier&type=track&offset=0&limit=20",
        "items": [
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/6BIYQZuFPkhbkCl2PHPcj6"
                    },
                    "href": "https://api.spotify.com/v1/albums/6BIYQZuFPkhbkCl2PHPcj6",
                    "id": "6BIYQZuFPkhbkCl2PHPcj6",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273f5b19cfcd4ff4d529533c625",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02f5b19cfcd4ff4d529533c625",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851f5b19cfcd4ff4d529533c625",
                            "width": 64
                        }
                    ],
                    "name": "Le pénitencier",
                    "release_date": "1964-10-25",
                    "release_date_precision": "day",
                    "total_tracks": 8,
                    "type": "album",
                    "uri": "spotify:album:6BIYQZuFPkhbkCl2PHPcj6"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 245493,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ036400440"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6phMPtxOkjdXR8ax9xoCJ9"
                },
                "href": "https://api.spotify.com/v1/tracks/6phMPtxOkjdXR8ax9xoCJ9",
                "id": "6phMPtxOkjdXR8ax9xoCJ9",
                "is_local": false,
                "name": "Le pénitencier",
                "popularity": 52,
                "preview_url": null,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:6phMPtxOkjdXR8ax9xoCJ9"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2H2InnwLRF1BpQObYUZlDw"
                            },
                            "href": "https://api.spotify.com/v1/artists/2H2InnwLRF1BpQObYUZlDw",
                            "id": "2H2InnwLRF1BpQObYUZlDw",
                            "name": "Shtar Academy",
                            "type": "artist",
                            "uri": "spotify:artist:2H2InnwLRF1BpQObYUZlDw"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3cxyj0Ex1wAmzGUcVTbM1n"
                    },
                    "href": "https://api.spotify.com/v1/albums/3cxyj0Ex1wAmzGUcVTbM1n",
                    "id": "3cxyj0Ex1wAmzGUcVTbM1n",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730ee7c51619bd45ebc4b96d75",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e020ee7c51619bd45ebc4b96d75",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048510ee7c51619bd45ebc4b96d75",
                            "width": 64
                        }
                    ],
                    "name": "Shtar Academy",
                    "release_date": "2014-01-20",
                    "release_date_precision": "day",
                    "total_tracks": 18,
                    "type": "album",
                    "uri": "spotify:album:3cxyj0Ex1wAmzGUcVTbM1n"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2H2InnwLRF1BpQObYUZlDw"
                        },
                        "href": "https://api.spotify.com/v1/artists/2H2InnwLRF1BpQObYUZlDw",
                        "id": "2H2InnwLRF1BpQObYUZlDw",
                        "name": "Shtar Academy",
                        "type": "artist",
                        "uri": "spotify:artist:2H2InnwLRF1BpQObYUZlDw"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/17znrQ0S6FFfWvELvCwQUS"
                        },
                        "href": "https://api.spotify.com/v1/artists/17znrQ0S6FFfWvELvCwQUS",
                        "id": "17znrQ0S6FFfWvELvCwQUS",
                        "name": "Nemir, Keny Arkana, Nekfeu, Nor, REDK, Tekila, Lino, Bakar, Sat , Medine, Orelsan, Gringe, Vincenzo, Soprano & Alonzo",
                        "type": "artist",
                        "uri": "spotify:artist:17znrQ0S6FFfWvELvCwQUS"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 690080,
                "explicit": false,
                "external_ids": {
                    "isrc": "FR6GM1300030"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/4BHPTDtZ6pBIFf5UQHTx0U"
                },
                "href": "https://api.spotify.com/v1/tracks/4BHPTDtZ6pBIFf5UQHTx0U",
                "id": "4BHPTDtZ6pBIFf5UQHTx0U",
                "is_local": false,
                "name": "Les portes du pénitencier (version longue) (feat. Nemir, Keny Arkana, Nekfeu, Nor, REDK, Tekila, Lino, Bakar, Sat (FF), Medine, Orelsan, Gringe, Vincenzo, Soprano & Alonzo (Psy 4))",
                "popularity": 27,
                "preview_url": "https://p.scdn.co/mp3-preview/08f90248e880c075f884a687fa237c1e3c8a1643?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 10,
                "type": "track",
                "uri": "spotify:track:4BHPTDtZ6pBIFf5UQHTx0U"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3ayds6VIVBx3CU5NSNCDbq"
                            },
                            "href": "https://api.spotify.com/v1/artists/3ayds6VIVBx3CU5NSNCDbq",
                            "id": "3ayds6VIVBx3CU5NSNCDbq",
                            "name": "Jacques Dutronc",
                            "type": "artist",
                            "uri": "spotify:artist:3ayds6VIVBx3CU5NSNCDbq"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4KBk9hwqFYtGS3DlZJiCsQ"
                            },
                            "href": "https://api.spotify.com/v1/artists/4KBk9hwqFYtGS3DlZJiCsQ",
                            "id": "4KBk9hwqFYtGS3DlZJiCsQ",
                            "name": "Eddy Mitchell",
                            "type": "artist",
                            "uri": "spotify:artist:4KBk9hwqFYtGS3DlZJiCsQ"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/1u9mzMbl0EIrziU28fNmox"
                    },
                    "href": "https://api.spotify.com/v1/albums/1u9mzMbl0EIrziU28fNmox",
                    "id": "1u9mzMbl0EIrziU28fNmox",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27376bd2d733dc3e4ca05459afe",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0276bd2d733dc3e4ca05459afe",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485176bd2d733dc3e4ca05459afe",
                            "width": 64
                        }
                    ],
                    "name": "Les Vieilles Canailles : Le Live",
                    "release_date": "2019-11-08",
                    "release_date_precision": "day",
                    "total_tracks": 24,
                    "type": "album",
                    "uri": "spotify:album:1u9mzMbl0EIrziU28fNmox"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 368493,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ041901671"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/028uvXPIlajpJbFJtxK7al"
                },
                "href": "https://api.spotify.com/v1/tracks/028uvXPIlajpJbFJtxK7al",
                "id": "028uvXPIlajpJbFJtxK7al",
                "is_local": false,
                "name": "Le pénitencier - Live",
                "popularity": 26,
                "preview_url": "https://p.scdn.co/mp3-preview/fd44c3909386bbfb9990ad73455e280f1ab3ca62?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 18,
                "type": "track",
                "uri": "spotify:track:028uvXPIlajpJbFJtxK7al"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6TOGbRYHQizlf3adIyugol"
                            },
                            "href": "https://api.spotify.com/v1/artists/6TOGbRYHQizlf3adIyugol",
                            "id": "6TOGbRYHQizlf3adIyugol",
                            "name": "Hugues Aufray",
                            "type": "artist",
                            "uri": "spotify:artist:6TOGbRYHQizlf3adIyugol"
                        }
                    ],
                    "available_markets": [
                        "AE",
                        "AT",
                        "BE",
                        "BH",
                        "CH",
                        "DE",
                        "DZ",
                        "EE",
                        "EG",
                        "FI",
                        "FR",
                        "ID",
                        "IL",
                        "IN",
                        "JO",
                        "KW",
                        "LB",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "NL",
                        "OM",
                        "PH",
                        "QA",
                        "SA",
                        "TN",
                        "TR",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/5pShdBlJYq5R60ffTron9x"
                    },
                    "href": "https://api.spotify.com/v1/albums/5pShdBlJYq5R60ffTron9x",
                    "id": "5pShdBlJYq5R60ffTron9x",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2731c509fd98e1580b7d399700c",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e021c509fd98e1580b7d399700c",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048511c509fd98e1580b7d399700c",
                            "width": 64
                        }
                    ],
                    "name": "Les 50 + Belles Chansons De Hugues Aufray",
                    "release_date": "2012-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 50,
                    "type": "album",
                    "uri": "spotify:album:5pShdBlJYq5R60ffTron9x"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6TOGbRYHQizlf3adIyugol"
                        },
                        "href": "https://api.spotify.com/v1/artists/6TOGbRYHQizlf3adIyugol",
                        "id": "6TOGbRYHQizlf3adIyugol",
                        "name": "Hugues Aufray",
                        "type": "artist",
                        "uri": "spotify:artist:6TOGbRYHQizlf3adIyugol"
                    }
                ],
                "available_markets": [
                    "AE",
                    "AT",
                    "BE",
                    "BH",
                    "CH",
                    "DE",
                    "DZ",
                    "EE",
                    "EG",
                    "FI",
                    "FR",
                    "ID",
                    "IL",
                    "IN",
                    "JO",
                    "KW",
                    "LB",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "NL",
                    "OM",
                    "PH",
                    "QA",
                    "SA",
                    "TN",
                    "TR",
                    "ZA"
                ],
                "disc_number": 3,
                "duration_ms": 220120,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRUM71101617"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/3qmyNINgQqPMNDufHV6BVj"
                },
                "href": "https://api.spotify.com/v1/tracks/3qmyNINgQqPMNDufHV6BVj",
                "id": "3qmyNINgQqPMNDufHV6BVj",
                "is_local": false,
                "name": "Les Portes Du Pénitencier",
                "popularity": 20,
                "preview_url": null,
                "track_number": 17,
                "type": "track",
                "uri": "spotify:track:3qmyNINgQqPMNDufHV6BVj"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2H2InnwLRF1BpQObYUZlDw"
                            },
                            "href": "https://api.spotify.com/v1/artists/2H2InnwLRF1BpQObYUZlDw",
                            "id": "2H2InnwLRF1BpQObYUZlDw",
                            "name": "Shtar Academy",
                            "type": "artist",
                            "uri": "spotify:artist:2H2InnwLRF1BpQObYUZlDw"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3cxyj0Ex1wAmzGUcVTbM1n"
                    },
                    "href": "https://api.spotify.com/v1/albums/3cxyj0Ex1wAmzGUcVTbM1n",
                    "id": "3cxyj0Ex1wAmzGUcVTbM1n",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2730ee7c51619bd45ebc4b96d75",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e020ee7c51619bd45ebc4b96d75",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048510ee7c51619bd45ebc4b96d75",
                            "width": 64
                        }
                    ],
                    "name": "Shtar Academy",
                    "release_date": "2014-01-20",
                    "release_date_precision": "day",
                    "total_tracks": 18,
                    "type": "album",
                    "uri": "spotify:album:3cxyj0Ex1wAmzGUcVTbM1n"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2H2InnwLRF1BpQObYUZlDw"
                        },
                        "href": "https://api.spotify.com/v1/artists/2H2InnwLRF1BpQObYUZlDw",
                        "id": "2H2InnwLRF1BpQObYUZlDw",
                        "name": "Shtar Academy",
                        "type": "artist",
                        "uri": "spotify:artist:2H2InnwLRF1BpQObYUZlDw"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7qzo12lvVhQwXvY4cgxaIV"
                        },
                        "href": "https://api.spotify.com/v1/artists/7qzo12lvVhQwXvY4cgxaIV",
                        "id": "7qzo12lvVhQwXvY4cgxaIV",
                        "name": "Nemir, Nekfeu, Soprano & Alonzo",
                        "type": "artist",
                        "uri": "spotify:artist:7qzo12lvVhQwXvY4cgxaIV"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 225653,
                "explicit": false,
                "external_ids": {
                    "isrc": "FR6GM1300220"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/3Yegb0tjsdNYt36DR8zI2o"
                },
                "href": "https://api.spotify.com/v1/tracks/3Yegb0tjsdNYt36DR8zI2o",
                "id": "3Yegb0tjsdNYt36DR8zI2o",
                "is_local": false,
                "name": "Les portes du pénitencier (feat. Nemir, Nekfeu, Soprano & Alonzo (Psy 4))",
                "popularity": 20,
                "preview_url": "https://p.scdn.co/mp3-preview/90c7a38f9b9bf40406099c941d89c4ba3767c1e2?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 18,
                "type": "track",
                "uri": "spotify:track:3Yegb0tjsdNYt36DR8zI2o"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/75PU9cvoxWhplV3LzXGFt3"
                    },
                    "href": "https://api.spotify.com/v1/albums/75PU9cvoxWhplV3LzXGFt3",
                    "id": "75PU9cvoxWhplV3LzXGFt3",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27300f5968bf607f64b83484cec",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0200f5968bf607f64b83484cec",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485100f5968bf607f64b83484cec",
                            "width": 64
                        }
                    ],
                    "name": "Stade de France 98 - XXème anniversaire",
                    "release_date": "2018-11-23",
                    "release_date_precision": "day",
                    "total_tracks": 35,
                    "type": "album",
                    "uri": "spotify:album:75PU9cvoxWhplV3LzXGFt3"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0g7hZVprd3orBpMrSLWeJ9"
                        },
                        "href": "https://api.spotify.com/v1/artists/0g7hZVprd3orBpMrSLWeJ9",
                        "id": "0g7hZVprd3orBpMrSLWeJ9",
                        "name": "Florent Pagny",
                        "type": "artist",
                        "uri": "spotify:artist:0g7hZVprd3orBpMrSLWeJ9"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 292833,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRUM71801686"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/7v4WnEgxinJ2QjVRbMRxVl"
                },
                "href": "https://api.spotify.com/v1/tracks/7v4WnEgxinJ2QjVRbMRxVl",
                "id": "7v4WnEgxinJ2QjVRbMRxVl",
                "is_local": false,
                "name": "Le pénitencier",
                "popularity": 17,
                "preview_url": null,
                "track_number": 21,
                "type": "track",
                "uri": "spotify:track:7v4WnEgxinJ2QjVRbMRxVl"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AE",
                        "AT",
                        "BE",
                        "BG",
                        "BH",
                        "BR",
                        "CH",
                        "CZ",
                        "DE",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "HK",
                        "HU",
                        "ID",
                        "IS",
                        "JO",
                        "LB",
                        "LT",
                        "LU",
                        "LV",
                        "MY",
                        "NO",
                        "OM",
                        "PH",
                        "PT",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SK",
                        "TN",
                        "TR",
                        "TW",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3Z1V3MU5zw0nyTJGEfiFfq"
                    },
                    "href": "https://api.spotify.com/v1/albums/3Z1V3MU5zw0nyTJGEfiFfq",
                    "id": "3Z1V3MU5zw0nyTJGEfiFfq",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b34d9698e403b58e0ad2d3f2",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02b34d9698e403b58e0ad2d3f2",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851b34d9698e403b58e0ad2d3f2",
                            "width": 64
                        }
                    ],
                    "name": "Les N°1",
                    "release_date": "2009-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 42,
                    "type": "album",
                    "uri": "spotify:album:3Z1V3MU5zw0nyTJGEfiFfq"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AE",
                    "AT",
                    "BE",
                    "BG",
                    "BH",
                    "BR",
                    "CH",
                    "CZ",
                    "DE",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "HK",
                    "HU",
                    "ID",
                    "IS",
                    "JO",
                    "LB",
                    "LT",
                    "LU",
                    "LV",
                    "MY",
                    "NO",
                    "OM",
                    "PH",
                    "PT",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SK",
                    "TN",
                    "TR",
                    "TW",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 242093,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ036402390"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/1nDx1y6psIACzeaDDwYKgH"
                },
                "href": "https://api.spotify.com/v1/tracks/1nDx1y6psIACzeaDDwYKgH",
                "id": "1nDx1y6psIACzeaDDwYKgH",
                "is_local": false,
                "name": "Le pénitencier",
                "popularity": 40,
                "preview_url": null,
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:1nDx1y6psIACzeaDDwYKgH"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id": "0LyfQWJT6nXafLPZqxe9Of",
                            "name": "Multi-interprètes",
                            "type": "artist",
                            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        }
                    ],
                    "available_markets": [
                        "BE",
                        "CA",
                        "CH",
                        "DZ",
                        "FR",
                        "LU",
                        "MA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/7g89ti7N0y6IZLDaOwUnzA"
                    },
                    "href": "https://api.spotify.com/v1/albums/7g89ti7N0y6IZLDaOwUnzA",
                    "id": "7g89ti7N0y6IZLDaOwUnzA",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273c2273231ffd23682806ff9f3",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02c2273231ffd23682806ff9f3",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851c2273231ffd23682806ff9f3",
                            "width": 64
                        }
                    ],
                    "name": "Nostalgie sixties",
                    "release_date": "2020-05-29",
                    "release_date_precision": "day",
                    "total_tracks": 37,
                    "type": "album",
                    "uri": "spotify:album:7g89ti7N0y6IZLDaOwUnzA"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "BE",
                    "CA",
                    "CH",
                    "DZ",
                    "FR",
                    "LU",
                    "MA"
                ],
                "disc_number": 1,
                "duration_ms": 240546,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ036400440"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6LgrrVv75J5rrKcrrdJxez"
                },
                "href": "https://api.spotify.com/v1/tracks/6LgrrVv75J5rrKcrrdJxez",
                "id": "6LgrrVv75J5rrKcrrdJxez",
                "is_local": false,
                "name": "Le pénitencier",
                "popularity": 0,
                "preview_url": null,
                "track_number": 19,
                "type": "track",
                "uri": "spotify:track:6LgrrVv75J5rrKcrrdJxez"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AT",
                        "AU",
                        "BE",
                        "BH",
                        "BR",
                        "CH",
                        "DE",
                        "DK",
                        "DZ",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "IE",
                        "IN",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LU",
                        "MA",
                        "MC",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PT",
                        "QA",
                        "SA",
                        "SE",
                        "TN"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/3DhqKZkYpaJA3LnAgzRvuq"
                    },
                    "href": "https://api.spotify.com/v1/albums/3DhqKZkYpaJA3LnAgzRvuq",
                    "id": "3DhqKZkYpaJA3LnAgzRvuq",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273243bb3a2585c3caec451a788",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02243bb3a2585c3caec451a788",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851243bb3a2585c3caec451a788",
                            "width": 64
                        }
                    ],
                    "name": "70eme Anniversaire",
                    "release_date": "2013-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 70,
                    "type": "album",
                    "uri": "spotify:album:3DhqKZkYpaJA3LnAgzRvuq"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AT",
                    "AU",
                    "BE",
                    "BH",
                    "BR",
                    "CH",
                    "DE",
                    "DK",
                    "DZ",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "IE",
                    "IN",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LU",
                    "MA",
                    "MC",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PT",
                    "QA",
                    "SA",
                    "SE",
                    "TN"
                ],
                "disc_number": 1,
                "duration_ms": 242746,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ036400440"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/5RHxnjBKbfTmKR994QDsSh"
                },
                "href": "https://api.spotify.com/v1/tracks/5RHxnjBKbfTmKR994QDsSh",
                "id": "5RHxnjBKbfTmKR994QDsSh",
                "is_local": false,
                "name": "Le pénitencier",
                "popularity": 24,
                "preview_url": null,
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:5RHxnjBKbfTmKR994QDsSh"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0vaTqnJHjo2urub0R3RxpV"
                    },
                    "href": "https://api.spotify.com/v1/albums/0vaTqnJHjo2urub0R3RxpV",
                    "id": "0vaTqnJHjo2urub0R3RxpV",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b1b9e0b26781719dd72f0749",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02b1b9e0b26781719dd72f0749",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851b1b9e0b26781719dd72f0749",
                            "width": 64
                        }
                    ],
                    "name": "L'album de sa vie 50 titres",
                    "release_date": "2018-09-28",
                    "release_date_precision": "day",
                    "total_tracks": 50,
                    "type": "album",
                    "uri": "spotify:album:0vaTqnJHjo2urub0R3RxpV"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 243253,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ036400440"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/527CGr5xMv55MbBJWC54XO"
                },
                "href": "https://api.spotify.com/v1/tracks/527CGr5xMv55MbBJWC54XO",
                "id": "527CGr5xMv55MbBJWC54XO",
                "is_local": false,
                "name": "Le pénitencier",
                "popularity": 19,
                "preview_url": null,
                "track_number": 8,
                "type": "track",
                "uri": "spotify:track:527CGr5xMv55MbBJWC54XO"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/4FBnGx11AyYeyFmO6icQhP"
                    },
                    "href": "https://api.spotify.com/v1/albums/4FBnGx11AyYeyFmO6icQhP",
                    "id": "4FBnGx11AyYeyFmO6icQhP",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273b8687b2cd0868c78d89274be",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02b8687b2cd0868c78d89274be",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851b8687b2cd0868c78d89274be",
                            "width": 64
                        }
                    ],
                    "name": "Le concert de sa vie",
                    "release_date": "2018-12-14",
                    "release_date_precision": "day",
                    "total_tracks": 50,
                    "type": "album",
                    "uri": "spotify:album:4FBnGx11AyYeyFmO6icQhP"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 276320,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ809380070"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/1Ltwi88BbPY5o15LOcQRF2"
                },
                "href": "https://api.spotify.com/v1/tracks/1Ltwi88BbPY5o15LOcQRF2",
                "id": "1Ltwi88BbPY5o15LOcQRF2",
                "is_local": false,
                "name": "Le pénitencier - Live au Parc des Princes / 1993",
                "popularity": 17,
                "preview_url": null,
                "track_number": 11,
                "type": "track",
                "uri": "spotify:track:1Ltwi88BbPY5o15LOcQRF2"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/50fxnmb3DV0OJJjBGrygoJ"
                    },
                    "href": "https://api.spotify.com/v1/albums/50fxnmb3DV0OJJjBGrygoJ",
                    "id": "50fxnmb3DV0OJJjBGrygoJ",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273a36257661aec4ab9606eef6c",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02a36257661aec4ab9606eef6c",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851a36257661aec4ab9606eef6c",
                            "width": 64
                        }
                    ],
                    "name": "Rester vivant Tour (Live 2016) [Deluxe Version]",
                    "release_date": "2016-10-21",
                    "release_date_precision": "day",
                    "total_tracks": 44,
                    "type": "album",
                    "uri": "spotify:album:50fxnmb3DV0OJJjBGrygoJ"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 328706,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ041600974"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/494zHw8lxLeRlE6lVmeeoV"
                },
                "href": "https://api.spotify.com/v1/tracks/494zHw8lxLeRlE6lVmeeoV",
                "id": "494zHw8lxLeRlE6lVmeeoV",
                "is_local": false,
                "name": "Le pénitencier - Live au Palais 12, Bruxelles, 2016",
                "popularity": 16,
                "preview_url": "https://p.scdn.co/mp3-preview/7405987415394d3900aed81ea25135d0bf6c1eb4?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 18,
                "type": "track",
                "uri": "spotify:track:494zHw8lxLeRlE6lVmeeoV"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id": "0LyfQWJT6nXafLPZqxe9Of",
                            "name": "Multi-interprètes",
                            "type": "artist",
                            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/6yJRiX49fdBvJpUorBeFRS"
                    },
                    "href": "https://api.spotify.com/v1/albums/6yJRiX49fdBvJpUorBeFRS",
                    "id": "6yJRiX49fdBvJpUorBeFRS",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273cbfe8b8b58b8a5eab68fff1d",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02cbfe8b8b58b8a5eab68fff1d",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851cbfe8b8b58b8a5eab68fff1d",
                            "width": 64
                        }
                    ],
                    "name": "On a tous quelque chose de Johnny",
                    "release_date": "2017-11-17",
                    "release_date_precision": "day",
                    "total_tracks": 16,
                    "type": "album",
                    "uri": "spotify:album:6yJRiX49fdBvJpUorBeFRS"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3lx6C79jX79Qzo6yoC5Pyk"
                        },
                        "href": "https://api.spotify.com/v1/artists/3lx6C79jX79Qzo6yoC5Pyk",
                        "id": "3lx6C79jX79Qzo6yoC5Pyk",
                        "name": "Gauvain Sers",
                        "type": "artist",
                        "uri": "spotify:artist:3lx6C79jX79Qzo6yoC5Pyk"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 211746,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRUM71701809"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/1vcmDPIU2HSFOuLEDjRjUx"
                },
                "href": "https://api.spotify.com/v1/tracks/1vcmDPIU2HSFOuLEDjRjUx",
                "id": "1vcmDPIU2HSFOuLEDjRjUx",
                "is_local": false,
                "name": "Le penitencier",
                "popularity": 16,
                "preview_url": null,
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:1vcmDPIU2HSFOuLEDjRjUx"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AT",
                        "AU",
                        "BE",
                        "CH",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "IE",
                        "IL",
                        "JP",
                        "LT",
                        "LU",
                        "LV",
                        "MT",
                        "MX",
                        "NL",
                        "NO",
                        "NZ",
                        "PH",
                        "PS",
                        "PT",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "TN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0s3oLck2fcEgn3vDOYcfpW"
                    },
                    "href": "https://api.spotify.com/v1/albums/0s3oLck2fcEgn3vDOYcfpW",
                    "id": "0s3oLck2fcEgn3vDOYcfpW",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2732398ccef1b264714f0b2a4b1",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e022398ccef1b264714f0b2a4b1",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048512398ccef1b264714f0b2a4b1",
                            "width": 64
                        }
                    ],
                    "name": "Anthologie 1964/1966",
                    "release_date": "1998-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 22,
                    "type": "album",
                    "uri": "spotify:album:0s3oLck2fcEgn3vDOYcfpW"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AT",
                    "AU",
                    "BE",
                    "CH",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "IE",
                    "IL",
                    "JP",
                    "LT",
                    "LU",
                    "LV",
                    "MT",
                    "MX",
                    "NL",
                    "NO",
                    "NZ",
                    "PH",
                    "PS",
                    "PT",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "TN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 244000,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ036402390"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/2M6SNIbSezyW4frRxNCil3"
                },
                "href": "https://api.spotify.com/v1/tracks/2M6SNIbSezyW4frRxNCil3",
                "id": "2M6SNIbSezyW4frRxNCil3",
                "is_local": false,
                "name": "Le pénitencier",
                "popularity": 15,
                "preview_url": null,
                "track_number": 12,
                "type": "track",
                "uri": "spotify:track:2M6SNIbSezyW4frRxNCil3"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "BE",
                        "CA",
                        "CH",
                        "CR",
                        "FR",
                        "MX",
                        "US"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/12b1tVAedPdmKuBrIYhJBi"
                    },
                    "href": "https://api.spotify.com/v1/albums/12b1tVAedPdmKuBrIYhJBi",
                    "id": "12b1tVAedPdmKuBrIYhJBi",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ba579cf7bc28cc39465db548",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02ba579cf7bc28cc39465db548",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851ba579cf7bc28cc39465db548",
                            "width": 64
                        }
                    ],
                    "name": "Anthologie Vol. 1",
                    "release_date": "1997-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 44,
                    "type": "album",
                    "uri": "spotify:album:12b1tVAedPdmKuBrIYhJBi"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "BE",
                    "CA",
                    "CH",
                    "CR",
                    "FR",
                    "MX",
                    "US"
                ],
                "disc_number": 2,
                "duration_ms": 244000,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ036402390"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/1wnLydNMfwxEvA1JY3dk2A"
                },
                "href": "https://api.spotify.com/v1/tracks/1wnLydNMfwxEvA1JY3dk2A",
                "id": "1wnLydNMfwxEvA1JY3dk2A",
                "is_local": false,
                "name": "Le pénitencier",
                "popularity": 15,
                "preview_url": null,
                "track_number": 12,
                "type": "track",
                "uri": "spotify:track:1wnLydNMfwxEvA1JY3dk2A"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1OCpqnXexjxrakYtmur3rN"
                            },
                            "href": "https://api.spotify.com/v1/artists/1OCpqnXexjxrakYtmur3rN",
                            "id": "1OCpqnXexjxrakYtmur3rN",
                            "name": "Les Enfoirés",
                            "type": "artist",
                            "uri": "spotify:artist:1OCpqnXexjxrakYtmur3rN"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/66JUt8e6wUgBi8RAQ9A6vP"
                    },
                    "href": "https://api.spotify.com/v1/albums/66JUt8e6wUgBi8RAQ9A6vP",
                    "id": "66JUt8e6wUgBi8RAQ9A6vP",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2736c22cd81929ffb12f1023849",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e026c22cd81929ffb12f1023849",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048516c22cd81929ffb12f1023849",
                            "width": 64
                        }
                    ],
                    "name": "Au rendez-vous des Enfoirés (Live)",
                    "release_date": "2016-03-12",
                    "release_date_precision": "day",
                    "total_tracks": 21,
                    "type": "album",
                    "uri": "spotify:album:66JUt8e6wUgBi8RAQ9A6vP"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1OCpqnXexjxrakYtmur3rN"
                        },
                        "href": "https://api.spotify.com/v1/artists/1OCpqnXexjxrakYtmur3rN",
                        "id": "1OCpqnXexjxrakYtmur3rN",
                        "name": "Les Enfoirés",
                        "type": "artist",
                        "uri": "spotify:artist:1OCpqnXexjxrakYtmur3rN"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 355880,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRS011600040"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/051Ey0waIruGsbUqIT6lDH"
                },
                "href": "https://api.spotify.com/v1/tracks/051Ey0waIruGsbUqIT6lDH",
                "id": "051Ey0waIruGsbUqIT6lDH",
                "is_local": false,
                "name": "Le pénitencier - Live Version",
                "popularity": 15,
                "preview_url": "https://p.scdn.co/mp3-preview/040760ea3b0e1dda75edabf338366e67ea48ef6d?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 5,
                "type": "track",
                "uri": "spotify:track:051Ey0waIruGsbUqIT6lDH"
            },
            {
                "album": {
                    "album_type": "compilation",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                            },
                            "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                            "id": "0LyfQWJT6nXafLPZqxe9Of",
                            "name": "Multi-interprètes",
                            "type": "artist",
                            "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/56LDgGOybQVpEPoo4yjDBF"
                    },
                    "href": "https://api.spotify.com/v1/albums/56LDgGOybQVpEPoo4yjDBF",
                    "id": "56LDgGOybQVpEPoo4yjDBF",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b27340595d7506c908b436782bdf",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e0240595d7506c908b436782bdf",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d0000485140595d7506c908b436782bdf",
                            "width": 64
                        }
                    ],
                    "name": "Paris Hip Hop 2014",
                    "release_date": "2014-06-09",
                    "release_date_precision": "day",
                    "total_tracks": 15,
                    "type": "album",
                    "uri": "spotify:album:56LDgGOybQVpEPoo4yjDBF"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2H2InnwLRF1BpQObYUZlDw"
                        },
                        "href": "https://api.spotify.com/v1/artists/2H2InnwLRF1BpQObYUZlDw",
                        "id": "2H2InnwLRF1BpQObYUZlDw",
                        "name": "Shtar Academy",
                        "type": "artist",
                        "uri": "spotify:artist:2H2InnwLRF1BpQObYUZlDw"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5f6nz3iqzrfiUfKOIKvLvd"
                        },
                        "href": "https://api.spotify.com/v1/artists/5f6nz3iqzrfiUfKOIKvLvd",
                        "id": "5f6nz3iqzrfiUfKOIKvLvd",
                        "name": "Nemir",
                        "type": "artist",
                        "uri": "spotify:artist:5f6nz3iqzrfiUfKOIKvLvd"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4LXBc13z5EWsc5N32bLxfH"
                        },
                        "href": "https://api.spotify.com/v1/artists/4LXBc13z5EWsc5N32bLxfH",
                        "id": "4LXBc13z5EWsc5N32bLxfH",
                        "name": "Nekfeu",
                        "type": "artist",
                        "uri": "spotify:artist:4LXBc13z5EWsc5N32bLxfH"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2RJBv9wXbW6m539q9NOfW1"
                        },
                        "href": "https://api.spotify.com/v1/artists/2RJBv9wXbW6m539q9NOfW1",
                        "id": "2RJBv9wXbW6m539q9NOfW1",
                        "name": "Soprano",
                        "type": "artist",
                        "uri": "spotify:artist:2RJBv9wXbW6m539q9NOfW1"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2xCkxUNSdEyzt1cEH1SsxP"
                        },
                        "href": "https://api.spotify.com/v1/artists/2xCkxUNSdEyzt1cEH1SsxP",
                        "id": "2xCkxUNSdEyzt1cEH1SsxP",
                        "name": "Alonzo",
                        "type": "artist",
                        "uri": "spotify:artist:2xCkxUNSdEyzt1cEH1SsxP"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 225653,
                "explicit": false,
                "external_ids": {
                    "isrc": "FR6GM1300220"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/34SXnnmoSrbO3OdVHTbwxk"
                },
                "href": "https://api.spotify.com/v1/tracks/34SXnnmoSrbO3OdVHTbwxk",
                "id": "34SXnnmoSrbO3OdVHTbwxk",
                "is_local": false,
                "name": "Les portes du pénitencier (Version courte)",
                "popularity": 14,
                "preview_url": "https://p.scdn.co/mp3-preview/3931a1f1d1178d08a0c7fe5727c92a037cca8215?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 9,
                "type": "track",
                "uri": "spotify:track:34SXnnmoSrbO3OdVHTbwxk"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AE",
                        "AT",
                        "BE",
                        "BH",
                        "CA",
                        "CH",
                        "CR",
                        "CZ",
                        "DE",
                        "EE",
                        "EG",
                        "FI",
                        "FR",
                        "HK",
                        "IL",
                        "JO",
                        "JP",
                        "LB",
                        "LT",
                        "LV",
                        "MX",
                        "MY",
                        "NL",
                        "NO",
                        "OM",
                        "PH",
                        "PT",
                        "QA",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "TN",
                        "TW",
                        "US",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/2K1SZK845hy26d0qF0bIxS"
                    },
                    "href": "https://api.spotify.com/v1/albums/2K1SZK845hy26d0qF0bIxS",
                    "id": "2K1SZK845hy26d0qF0bIxS",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273ccc3a3a7450dfd26607052e7",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02ccc3a3a7450dfd26607052e7",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851ccc3a3a7450dfd26607052e7",
                            "width": 64
                        }
                    ],
                    "name": "Stade De France 1998",
                    "release_date": "1998-01-01",
                    "release_date_precision": "day",
                    "total_tracks": 28,
                    "type": "album",
                    "uri": "spotify:album:2K1SZK845hy26d0qF0bIxS"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0g7hZVprd3orBpMrSLWeJ9"
                        },
                        "href": "https://api.spotify.com/v1/artists/0g7hZVprd3orBpMrSLWeJ9",
                        "id": "0g7hZVprd3orBpMrSLWeJ9",
                        "name": "Florent Pagny",
                        "type": "artist",
                        "uri": "spotify:artist:0g7hZVprd3orBpMrSLWeJ9"
                    }
                ],
                "available_markets": [
                    "AE",
                    "AT",
                    "BE",
                    "BH",
                    "CA",
                    "CH",
                    "CR",
                    "CZ",
                    "DE",
                    "EE",
                    "EG",
                    "FI",
                    "FR",
                    "HK",
                    "IL",
                    "JO",
                    "JP",
                    "LB",
                    "LT",
                    "LV",
                    "MX",
                    "MY",
                    "NL",
                    "NO",
                    "OM",
                    "PH",
                    "PT",
                    "QA",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "TN",
                    "TW",
                    "US",
                    "ZA"
                ],
                "disc_number": 2,
                "duration_ms": 297946,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ039802990"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/0lKZduWasVExE0oPt0RpFx"
                },
                "href": "https://api.spotify.com/v1/tracks/0lKZduWasVExE0oPt0RpFx",
                "id": "0lKZduWasVExE0oPt0RpFx",
                "is_local": false,
                "name": "Le pénitencier - Live Stade de France / 1998",
                "popularity": 14,
                "preview_url": null,
                "track_number": 1,
                "type": "track",
                "uri": "spotify:track:0lKZduWasVExE0oPt0RpFx"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/4VcOPPmP9dhLG9W9CdmPSf"
                    },
                    "href": "https://api.spotify.com/v1/albums/4VcOPPmP9dhLG9W9CdmPSf",
                    "id": "4VcOPPmP9dhLG9W9CdmPSf",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b2738a398ff8939079360325f333",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e028a398ff8939079360325f333",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d000048518a398ff8939079360325f333",
                            "width": 64
                        }
                    ],
                    "name": "Tour 66 (Live au Stade de France 2009) [Deluxe version]",
                    "release_date": "2009-09-28",
                    "release_date_precision": "day",
                    "total_tracks": 42,
                    "type": "album",
                    "uri": "spotify:album:4VcOPPmP9dhLG9W9CdmPSf"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 350453,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ040900489"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/37jSpwlSKICu7x83d4NDO2"
                },
                "href": "https://api.spotify.com/v1/tracks/37jSpwlSKICu7x83d4NDO2",
                "id": "37jSpwlSKICu7x83d4NDO2",
                "is_local": false,
                "name": "Le pénitencier - Live au Stade de France 2009",
                "popularity": 14,
                "preview_url": "https://p.scdn.co/mp3-preview/9f57e0fff42afd73ef099d7f736f0126b1dd2a3a?cid=774b29d4f13844c495f206cafdad9c86",
                "track_number": 16,
                "type": "track",
                "uri": "spotify:track:37jSpwlSKICu7x83d4NDO2"
            },
            {
                "album": {
                    "album_type": "album",
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                            },
                            "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                            "id": "2HALYSe657tNJ1iKVXP2xA",
                            "name": "Johnny Hallyday",
                            "type": "artist",
                            "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                        }
                    ],
                    "available_markets": [
                        "AD",
                        "AE",
                        "AR",
                        "AT",
                        "AU",
                        "BE",
                        "BG",
                        "BH",
                        "BO",
                        "BR",
                        "CA",
                        "CH",
                        "CL",
                        "CO",
                        "CR",
                        "CY",
                        "CZ",
                        "DE",
                        "DK",
                        "DO",
                        "DZ",
                        "EC",
                        "EE",
                        "EG",
                        "ES",
                        "FI",
                        "FR",
                        "GB",
                        "GR",
                        "GT",
                        "HK",
                        "HN",
                        "HU",
                        "ID",
                        "IE",
                        "IL",
                        "IN",
                        "IS",
                        "IT",
                        "JO",
                        "JP",
                        "KW",
                        "LB",
                        "LI",
                        "LT",
                        "LU",
                        "LV",
                        "MA",
                        "MC",
                        "MT",
                        "MX",
                        "MY",
                        "NI",
                        "NL",
                        "NO",
                        "NZ",
                        "OM",
                        "PA",
                        "PE",
                        "PH",
                        "PL",
                        "PS",
                        "PT",
                        "PY",
                        "QA",
                        "RO",
                        "SA",
                        "SE",
                        "SG",
                        "SK",
                        "SV",
                        "TH",
                        "TN",
                        "TR",
                        "TW",
                        "US",
                        "UY",
                        "VN",
                        "ZA"
                    ],
                    "external_urls": {
                        "spotify": "https://open.spotify.com/album/0ut91sp7LrEF4c5IHOQJPn"
                    },
                    "href": "https://api.spotify.com/v1/albums/0ut91sp7LrEF4c5IHOQJPn",
                    "id": "0ut91sp7LrEF4c5IHOQJPn",
                    "images": [
                        {
                            "height": 640,
                            "url": "https://i.scdn.co/image/ab67616d0000b273409a29b5b86f05060e0e3777",
                            "width": 640
                        },
                        {
                            "height": 300,
                            "url": "https://i.scdn.co/image/ab67616d00001e02409a29b5b86f05060e0e3777",
                            "width": 300
                        },
                        {
                            "height": 64,
                            "url": "https://i.scdn.co/image/ab67616d00004851409a29b5b86f05060e0e3777",
                            "width": 64
                        }
                    ],
                    "name": "100 % Johnny - Live à la tour Eiffel",
                    "release_date": "2000-06-30",
                    "release_date_precision": "day",
                    "total_tracks": 25,
                    "type": "album",
                    "uri": "spotify:album:0ut91sp7LrEF4c5IHOQJPn"
                },
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2HALYSe657tNJ1iKVXP2xA"
                        },
                        "href": "https://api.spotify.com/v1/artists/2HALYSe657tNJ1iKVXP2xA",
                        "id": "2HALYSe657tNJ1iKVXP2xA",
                        "name": "Johnny Hallyday",
                        "type": "artist",
                        "uri": "spotify:artist:2HALYSe657tNJ1iKVXP2xA"
                    }
                ],
                "available_markets": [
                    "AD",
                    "AE",
                    "AR",
                    "AT",
                    "AU",
                    "BE",
                    "BG",
                    "BH",
                    "BO",
                    "BR",
                    "CA",
                    "CH",
                    "CL",
                    "CO",
                    "CR",
                    "CY",
                    "CZ",
                    "DE",
                    "DK",
                    "DO",
                    "DZ",
                    "EC",
                    "EE",
                    "EG",
                    "ES",
                    "FI",
                    "FR",
                    "GB",
                    "GR",
                    "GT",
                    "HK",
                    "HN",
                    "HU",
                    "ID",
                    "IE",
                    "IL",
                    "IN",
                    "IS",
                    "IT",
                    "JO",
                    "JP",
                    "KW",
                    "LB",
                    "LI",
                    "LT",
                    "LU",
                    "LV",
                    "MA",
                    "MC",
                    "MT",
                    "MX",
                    "MY",
                    "NI",
                    "NL",
                    "NO",
                    "NZ",
                    "OM",
                    "PA",
                    "PE",
                    "PH",
                    "PL",
                    "PS",
                    "PT",
                    "PY",
                    "QA",
                    "RO",
                    "SA",
                    "SE",
                    "SG",
                    "SK",
                    "SV",
                    "TH",
                    "TN",
                    "TR",
                    "TW",
                    "US",
                    "UY",
                    "VN",
                    "ZA"
                ],
                "disc_number": 1,
                "duration_ms": 298706,
                "explicit": false,
                "external_ids": {
                    "isrc": "FRZ030000520"
                },
                "external_urls": {
                    "spotify": "https://open.spotify.com/track/6YivLDUfIP3CPz1Ndo5YrP"
                },
                "href": "https://api.spotify.com/v1/tracks/6YivLDUfIP3CPz1Ndo5YrP",
                "id": "6YivLDUfIP3CPz1Ndo5YrP",
                "is_local": false,
                "name": "Le pénitencier - Live à la tour Eiffel, Paris / 2000",
                "popularity": 14,
                "preview_url": null,
                "track_number": 5,
                "type": "track",
                "uri": "spotify:track:6YivLDUfIP3CPz1Ndo5YrP"
            }
        ],
        "limit": 20,
        "next": "https://api.spotify.com/v1/search?query=penitencier&type=track&offset=20&limit=20",
        "offset": 0,
        "previous": null,
        "total": 490
    }
}

let returnSpotifyItem = searchOnSpotify.tracks.items
let resultFromSpotifyArray = []
let affichageSearchSpotify = returnSpotifyItem.map((info,i)=>{
    let title = info.name
    let artist = info.artists[0].name
    let album = info.album.name
    let spotifyId = info.id
    let type = info.type
    let img = info.album.images[0].url

    let description= artist + " - " + album

    resultFromSpotifyArray.push({id:i,name:title,text:description,url:img,spotifyId:spotifyId,type:type})
})


 /*  gestion des mouvements */

 const [idDel, setIdDel]= useState() ; 
 const [ idAdd, setIdAdd] = useState() ;


 /* Affichage dynamique en fonction de l'ecran*/
   const buttons = ['Hello', 'World']
   const [indexButton,setIndex]=useState([0])

   useEffect(() => {
    console.log("change",indexButton);
    if(indexButton===0){
        setAffichage(listOfPlaylist)
    }else{
        setAffichage(resultFromSpotifyArray)
        
    }
    }, [indexButton]);

// fonction filtre
let [affichagePlaylistDynamique,setAffichage]=useState([]); // recuperation de la playliste depuis le bouton

const[search,setSearch]=useState("")
const filteredPlaylist = affichagePlaylistDynamique.filter(function(item) {
    //applying filter for the inserted text in search bar
    const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
    const textData = search.toUpperCase();
    return itemData.indexOf(textData) > -1;
    });
    
  
  return (
<View style={styles.container}>

                {/*  "#c2185b" */}
        
                            <View style={styles.input}> 
                            <Text> New Radio</Text>
                            
                            <TextField
                                label={'Find a track'}
                                highlightColor="#c2185b"
                                onChangeText={ (value) => setSearch(value) }
                            
                                />
                            </View>

                            <View>
                                    <ButtonGroup
                                    onPress={(e) => {alert('Simple Button pressed',e),setIndex(e) }}
                                        selectedIndex={indexButton}
                                        buttons={buttons}
                                        containerStyle={{height: 40}}
                                        selectedButtonStyle ={{
                                            backgroundColor:"#00838F",
                                        }}
                                        />

                            </View>

                    <ScrollView>
    {/* liste des musiques */}
                 <FlatList


                data={filteredPlaylist}
                keyExtractor={item => item.id}
                renderItem={({ item}) => (
                  <ListItemSwap
                    {...item}
                    onSwipeFromLeft={() => {alert('swiped from left!');setIdAdd(item.id)}}
                    onSwipeFromRight={() => {alert('pressed right!');setIdDel(item.id)}}
                    
                  />
                )}
                ItemSeparatorComponent={() => <Separator />}
              />

                    </ScrollView>
         
 
                <View style={styles.button}>
                        <Button 
                            title="Press me"
                            onPress={() => alert('Simple Button pressed')}
                            buttonStyle={{
                                backgroundColor:"#00838F",
                            }}
                        />
                 </View>
  
 </View>
  );

}

const styles = StyleSheet.create({
    container: {
    display:"flex",
    flex:1,
    backgroundColor: '#fff',   
      },

    form:{
     display:"flex",
     flex:1,

      marginBottom:wp("15%"),
    },

  input:{
    marginRight:wp('10%'),
    marginLeft:wp('10%'),
    marginBottom:wp('10%'),
    },  


  paramPlaylist:{  
    backgroundColor: "#26a69a",
    marginRight:wp('7%'),
    marginLeft:wp('7%'),
    marginBottom:wp('70%'),
  },


  button:{
   marginRight:wp('10%'),
   marginLeft:wp('10%'),
},


  
});

export default CreateRadio2


