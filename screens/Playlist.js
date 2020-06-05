import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,SafeAreaView, ScrollView ,FlatList} from 'react-native';
import { Avatar, Badge, Icon, withBadge,Card,List,ListItem, Image, Header } from 'react-native-elements'
import ListItemSwap, { Separator } from './components/Swype';
import Track from './components/Track';
import Profile from './components/Profile';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export default function Playlist(props) {
/* const [listUser,setListUser]=useEffect() ;  */


  let listTest = [
    {name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
    {name:"John",url:"https://randomuser.me/api/portraits/men/40.jpg"},
    {name:"albert",url:"https://randomuser.me/api/portraits/men/39.jpg"},
    {name:"Moimeme",url:"https://randomuser.me/api/portraits/men/38.jpg"},
    {name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
    {name:"John",url:"https://randomuser.me/api/portraits/men/40.jpg"},
    {name:"albert",url:"https://randomuser.me/api/portraits/men/39.jpg"},
    {name:"Moimeme",url:"https://randomuser.me/api/portraits/men/38.jpg"},
    {name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
    {name:"John",url:"https://randomuser.me/api/portraits/men/40.jpg"},
    {name:"albert",url:"https://randomuser.me/api/portraits/men/39.jpg"},
    {name:"Moimeme",url:"https://randomuser.me/api/portraits/men/38.jpg"},
  ]

const quotes = [
  { id: '0', text: 'It’s just a flesh wound.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg" },
  { id: '1', text: 'That is my least vulnerable spot.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg" },
  {id: '2',text: 'This building has to be at least…. three times bigger than this!',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '3', text: 'I am serious. And don’t call me Shirley.' ,name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '4', text: 'Yeah, but I shoot with this hand.' ,name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '5', text: 'I’m just one stomach flu away from my goal weight.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg" },
  {id: '6',text:'I’m about to do to you what Limp Bizkit did to music in the late ’90s.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  {id: '7',text:'Martini. Gin, not vodka. Obviously. Stirred for 10 seconds while glancing at an unopened bottle of vermouth.',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '8',text:'Greater good?’ I am your wife! I’m the greatest good you’re ever gonna get!',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"},
  { id: '9', text:'I feel comfortable using legal jargon in everyday life. [Someone catcalls her.] I object!',name:"david",url:"https://randomuser.me/api/portraits/men/41.jpg"
  },
  {id: '10',text:'We get the warhead and we hold the world ransom for…. One million dollars.',
},
];

  /* Example boody playlist spotify  */
  let playslistTrack =[
    {
        "href": "https://api.spotify.com/v1/playlists/0RfIGLD8VTUw3u6pG1wwjU/tracks?offset=0&limit=100&market=fr",
        "items": [
            {
                "added_at": "2018-04-23T09:02:14Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3p5nfUyEYsxx8izMCym07n"
                                },
                                "href": "https://api.spotify.com/v1/artists/3p5nfUyEYsxx8izMCym07n",
                                "id": "3p5nfUyEYsxx8izMCym07n",
                                "name": "Oh The Larceny",
                                "type": "artist",
                                "uri": "spotify:artist:3p5nfUyEYsxx8izMCym07n"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/4hl7Lk0reDaY6BWHSvcZGc"
                        },
                        "href": "https://api.spotify.com/v1/albums/4hl7Lk0reDaY6BWHSvcZGc",
                        "id": "4hl7Lk0reDaY6BWHSvcZGc",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273972a2048dcdbd8a356dce361",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02972a2048dcdbd8a356dce361",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851972a2048dcdbd8a356dce361",
                                "width": 64
                            }
                        ],
                        "name": "Oh the Larceny",
                        "release_date": "2017-01-27",
                        "release_date_precision": "day",
                        "total_tracks": 5,
                        "type": "album",
                        "uri": "spotify:album:4hl7Lk0reDaY6BWHSvcZGc"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3p5nfUyEYsxx8izMCym07n"
                            },
                            "href": "https://api.spotify.com/v1/artists/3p5nfUyEYsxx8izMCym07n",
                            "id": "3p5nfUyEYsxx8izMCym07n",
                            "name": "Oh The Larceny",
                            "type": "artist",
                            "uri": "spotify:artist:3p5nfUyEYsxx8izMCym07n"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 161500,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "US43C1603405"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7i9SkByhWHowrcp77JH6Bo"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7i9SkByhWHowrcp77JH6Bo",
                    "id": "7i9SkByhWHowrcp77JH6Bo",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7KkjTn0eDfjhyNLkhnEjCl"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7KkjTn0eDfjhyNLkhnEjCl",
                        "id": "7KkjTn0eDfjhyNLkhnEjCl",
                        "type": "track",
                        "uri": "spotify:track:7KkjTn0eDfjhyNLkhnEjCl"
                    },
                    "name": "Check It Out",
                    "popularity": 55,
                    "preview_url": "https://p.scdn.co/mp3-preview/4d098427f2cff5c092d0a6afc87764e54c9c8cf8?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:7i9SkByhWHowrcp77JH6Bo"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-04-23T09:58:31Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3p5nfUyEYsxx8izMCym07n"
                                },
                                "href": "https://api.spotify.com/v1/artists/3p5nfUyEYsxx8izMCym07n",
                                "id": "3p5nfUyEYsxx8izMCym07n",
                                "name": "Oh The Larceny",
                                "type": "artist",
                                "uri": "spotify:artist:3p5nfUyEYsxx8izMCym07n"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7A24vSKJFeahzsp7KvmyeI"
                        },
                        "href": "https://api.spotify.com/v1/albums/7A24vSKJFeahzsp7KvmyeI",
                        "id": "7A24vSKJFeahzsp7KvmyeI",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2736e5e97eec07fb328e4ba9fb9",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e026e5e97eec07fb328e4ba9fb9",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048516e5e97eec07fb328e4ba9fb9",
                                "width": 64
                            }
                        ],
                        "name": "Move With It",
                        "release_date": "2018-01-12",
                        "release_date_precision": "day",
                        "total_tracks": 6,
                        "type": "album",
                        "uri": "spotify:album:7A24vSKJFeahzsp7KvmyeI"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3p5nfUyEYsxx8izMCym07n"
                            },
                            "href": "https://api.spotify.com/v1/artists/3p5nfUyEYsxx8izMCym07n",
                            "id": "3p5nfUyEYsxx8izMCym07n",
                            "name": "Oh The Larceny",
                            "type": "artist",
                            "uri": "spotify:artist:3p5nfUyEYsxx8izMCym07n"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 186666,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "US43C1605800"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0FSJWMI0ZcVv7QXwHcI4LZ"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0FSJWMI0ZcVv7QXwHcI4LZ",
                    "id": "0FSJWMI0ZcVv7QXwHcI4LZ",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3HtN9YBRCw6rIZIkmd3GGA"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3HtN9YBRCw6rIZIkmd3GGA",
                        "id": "3HtN9YBRCw6rIZIkmd3GGA",
                        "type": "track",
                        "uri": "spotify:track:3HtN9YBRCw6rIZIkmd3GGA"
                    },
                    "name": "About To Get Crazy",
                    "popularity": 44,
                    "preview_url": "https://p.scdn.co/mp3-preview/97061edfd8cb30bcb20bf589743b86d86d9bdb52?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:0FSJWMI0ZcVv7QXwHcI4LZ"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-04-23T11:57:19Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7qh7VUg1GOWzb1DklOkwBd"
                                },
                                "href": "https://api.spotify.com/v1/artists/7qh7VUg1GOWzb1DklOkwBd",
                                "id": "7qh7VUg1GOWzb1DklOkwBd",
                                "name": "Thomas Vent",
                                "type": "artist",
                                "uri": "spotify:artist:7qh7VUg1GOWzb1DklOkwBd"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/6DQctpu8L9OYXFtz76jXYg"
                        },
                        "href": "https://api.spotify.com/v1/albums/6DQctpu8L9OYXFtz76jXYg",
                        "id": "6DQctpu8L9OYXFtz76jXYg",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273e9a469e5e30e6150d6ceaee0",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02e9a469e5e30e6150d6ceaee0",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851e9a469e5e30e6150d6ceaee0",
                                "width": 64
                            }
                        ],
                        "name": "West World EP",
                        "release_date": "2017-06-16",
                        "release_date_precision": "day",
                        "total_tracks": 4,
                        "type": "album",
                        "uri": "spotify:album:6DQctpu8L9OYXFtz76jXYg"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7qh7VUg1GOWzb1DklOkwBd"
                            },
                            "href": "https://api.spotify.com/v1/artists/7qh7VUg1GOWzb1DklOkwBd",
                            "id": "7qh7VUg1GOWzb1DklOkwBd",
                            "name": "Thomas Vent",
                            "type": "artist",
                            "uri": "spotify:artist:7qh7VUg1GOWzb1DklOkwBd"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 186666,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USLZJ1782833"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0Fbm4u0ARgkBtDy9BXlsCn"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0Fbm4u0ARgkBtDy9BXlsCn",
                    "id": "0Fbm4u0ARgkBtDy9BXlsCn",
                    "is_local": false,
                    "is_playable": true,
                    "name": "I Had A Dream",
                    "popularity": 21,
                    "preview_url": "https://p.scdn.co/mp3-preview/f63149b49d41005efd964ffb38813156d2bd7580?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:0Fbm4u0ARgkBtDy9BXlsCn"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-04-23T16:45:33Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7qh7VUg1GOWzb1DklOkwBd"
                                },
                                "href": "https://api.spotify.com/v1/artists/7qh7VUg1GOWzb1DklOkwBd",
                                "id": "7qh7VUg1GOWzb1DklOkwBd",
                                "name": "Thomas Vent",
                                "type": "artist",
                                "uri": "spotify:artist:7qh7VUg1GOWzb1DklOkwBd"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/21hcCBsqjvd7C78aIyLCVq"
                        },
                        "href": "https://api.spotify.com/v1/albums/21hcCBsqjvd7C78aIyLCVq",
                        "id": "21hcCBsqjvd7C78aIyLCVq",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27300961dc08e2e6241a504b694",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0200961dc08e2e6241a504b694",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485100961dc08e2e6241a504b694",
                                "width": 64
                            }
                        ],
                        "name": "Blue Bomb EP",
                        "release_date": "2018-03-12",
                        "release_date_precision": "day",
                        "total_tracks": 2,
                        "type": "album",
                        "uri": "spotify:album:21hcCBsqjvd7C78aIyLCVq"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7qh7VUg1GOWzb1DklOkwBd"
                            },
                            "href": "https://api.spotify.com/v1/artists/7qh7VUg1GOWzb1DklOkwBd",
                            "id": "7qh7VUg1GOWzb1DklOkwBd",
                            "name": "Thomas Vent",
                            "type": "artist",
                            "uri": "spotify:artist:7qh7VUg1GOWzb1DklOkwBd"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 218490,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "QZ5FN1832000"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5wkCY3uC82qZ6JUX2zRbVa"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5wkCY3uC82qZ6JUX2zRbVa",
                    "id": "5wkCY3uC82qZ6JUX2zRbVa",
                    "is_local": false,
                    "is_playable": true,
                    "name": "In My Soul",
                    "popularity": 16,
                    "preview_url": "https://p.scdn.co/mp3-preview/3355b9b5df97346ee07c18129169dd57402c1a87?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:5wkCY3uC82qZ6JUX2zRbVa"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-04-24T07:44:35Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7qh7VUg1GOWzb1DklOkwBd"
                                },
                                "href": "https://api.spotify.com/v1/artists/7qh7VUg1GOWzb1DklOkwBd",
                                "id": "7qh7VUg1GOWzb1DklOkwBd",
                                "name": "Thomas Vent",
                                "type": "artist",
                                "uri": "spotify:artist:7qh7VUg1GOWzb1DklOkwBd"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7klA8qg6afzXjeJXVGh6Sd"
                        },
                        "href": "https://api.spotify.com/v1/albums/7klA8qg6afzXjeJXVGh6Sd",
                        "id": "7klA8qg6afzXjeJXVGh6Sd",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273bc199d677af5ff2ee53fa263",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02bc199d677af5ff2ee53fa263",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851bc199d677af5ff2ee53fa263",
                                "width": 64
                            }
                        ],
                        "name": "Backwoods Man",
                        "release_date": "2017-08-05",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:7klA8qg6afzXjeJXVGh6Sd"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7qh7VUg1GOWzb1DklOkwBd"
                            },
                            "href": "https://api.spotify.com/v1/artists/7qh7VUg1GOWzb1DklOkwBd",
                            "id": "7qh7VUg1GOWzb1DklOkwBd",
                            "name": "Thomas Vent",
                            "type": "artist",
                            "uri": "spotify:artist:7qh7VUg1GOWzb1DklOkwBd"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 264000,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "QZ5FN1708898"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3fZT6JGheJdSqSBwtDReJr"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3fZT6JGheJdSqSBwtDReJr",
                    "id": "3fZT6JGheJdSqSBwtDReJr",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Backwoods Man",
                    "popularity": 37,
                    "preview_url": "https://p.scdn.co/mp3-preview/857fca1230012c147638d2c51c489faab707a7d6?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:3fZT6JGheJdSqSBwtDReJr"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-04-24T13:34:11Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2uMWUtg8XLpJxNSqbGOkl1"
                                },
                                "href": "https://api.spotify.com/v1/artists/2uMWUtg8XLpJxNSqbGOkl1",
                                "id": "2uMWUtg8XLpJxNSqbGOkl1",
                                "name": "All Good Things",
                                "type": "artist",
                                "uri": "spotify:artist:2uMWUtg8XLpJxNSqbGOkl1"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7DqkWmFsqgZWzEvPyRsLEh"
                        },
                        "href": "https://api.spotify.com/v1/albums/7DqkWmFsqgZWzEvPyRsLEh",
                        "id": "7DqkWmFsqgZWzEvPyRsLEh",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273d6becb0f8ba3245f26885675",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02d6becb0f8ba3245f26885675",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851d6becb0f8ba3245f26885675",
                                "width": 64
                            }
                        ],
                        "name": "Machines",
                        "release_date": "2017-10-20",
                        "release_date_precision": "day",
                        "total_tracks": 9,
                        "type": "album",
                        "uri": "spotify:album:7DqkWmFsqgZWzEvPyRsLEh"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2uMWUtg8XLpJxNSqbGOkl1"
                            },
                            "href": "https://api.spotify.com/v1/artists/2uMWUtg8XLpJxNSqbGOkl1",
                            "id": "2uMWUtg8XLpJxNSqbGOkl1",
                            "name": "All Good Things",
                            "type": "artist",
                            "uri": "spotify:artist:2uMWUtg8XLpJxNSqbGOkl1"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 279308,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "TCADG1790574"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/1kd5qplldnxu16qcZXS3Yk"
                    },
                    "href": "https://api.spotify.com/v1/tracks/1kd5qplldnxu16qcZXS3Yk",
                    "id": "1kd5qplldnxu16qcZXS3Yk",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/3B9fSgViwhIqsVa7W9NVZK"
                        },
                        "href": "https://api.spotify.com/v1/tracks/3B9fSgViwhIqsVa7W9NVZK",
                        "id": "3B9fSgViwhIqsVa7W9NVZK",
                        "type": "track",
                        "uri": "spotify:track:3B9fSgViwhIqsVa7W9NVZK"
                    },
                    "name": "For the Glory",
                    "popularity": 66,
                    "preview_url": "https://p.scdn.co/mp3-preview/7f85bdad842c45481df781c243c1cd5749d794c8?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 7,
                    "type": "track",
                    "uri": "spotify:track:1kd5qplldnxu16qcZXS3Yk"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-04-29T15:18:47Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3p5nfUyEYsxx8izMCym07n"
                                },
                                "href": "https://api.spotify.com/v1/artists/3p5nfUyEYsxx8izMCym07n",
                                "id": "3p5nfUyEYsxx8izMCym07n",
                                "name": "Oh The Larceny",
                                "type": "artist",
                                "uri": "spotify:artist:3p5nfUyEYsxx8izMCym07n"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7A24vSKJFeahzsp7KvmyeI"
                        },
                        "href": "https://api.spotify.com/v1/albums/7A24vSKJFeahzsp7KvmyeI",
                        "id": "7A24vSKJFeahzsp7KvmyeI",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2736e5e97eec07fb328e4ba9fb9",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e026e5e97eec07fb328e4ba9fb9",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048516e5e97eec07fb328e4ba9fb9",
                                "width": 64
                            }
                        ],
                        "name": "Move With It",
                        "release_date": "2018-01-12",
                        "release_date_precision": "day",
                        "total_tracks": 6,
                        "type": "album",
                        "uri": "spotify:album:7A24vSKJFeahzsp7KvmyeI"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3p5nfUyEYsxx8izMCym07n"
                            },
                            "href": "https://api.spotify.com/v1/artists/3p5nfUyEYsxx8izMCym07n",
                            "id": "3p5nfUyEYsxx8izMCym07n",
                            "name": "Oh The Larceny",
                            "type": "artist",
                            "uri": "spotify:artist:3p5nfUyEYsxx8izMCym07n"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 199333,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "US43C1605809"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7afP6sJxO7df7olyd1fER3"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7afP6sJxO7df7olyd1fER3",
                    "id": "7afP6sJxO7df7olyd1fER3",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5f86pwm0xHX09PgGcvu2F0"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5f86pwm0xHX09PgGcvu2F0",
                        "id": "5f86pwm0xHX09PgGcvu2F0",
                        "type": "track",
                        "uri": "spotify:track:5f86pwm0xHX09PgGcvu2F0"
                    },
                    "name": "Man On Fire",
                    "popularity": 42,
                    "preview_url": "https://p.scdn.co/mp3-preview/44bb2650d8b6e88ec5888cb8f3fd17d813a63891?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 4,
                    "type": "track",
                    "uri": "spotify:track:7afP6sJxO7df7olyd1fER3"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-04-29T15:24:00Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6Os3fHAI2Fma2UzTD91RU8"
                                },
                                "href": "https://api.spotify.com/v1/artists/6Os3fHAI2Fma2UzTD91RU8",
                                "id": "6Os3fHAI2Fma2UzTD91RU8",
                                "name": "Watt White",
                                "type": "artist",
                                "uri": "spotify:artist:6Os3fHAI2Fma2UzTD91RU8"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/6Eb0Swe0bBTF7MLTXKifv7"
                        },
                        "href": "https://api.spotify.com/v1/albums/6Eb0Swe0bBTF7MLTXKifv7",
                        "id": "6Eb0Swe0bBTF7MLTXKifv7",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273bd6c7022526d0c1f612ffd5f",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02bd6c7022526d0c1f612ffd5f",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851bd6c7022526d0c1f612ffd5f",
                                "width": 64
                            }
                        ],
                        "name": "Eye Of The Storm",
                        "release_date": "2017-03-29",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:6Eb0Swe0bBTF7MLTXKifv7"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6Os3fHAI2Fma2UzTD91RU8"
                            },
                            "href": "https://api.spotify.com/v1/artists/6Os3fHAI2Fma2UzTD91RU8",
                            "id": "6Os3fHAI2Fma2UzTD91RU8",
                            "name": "Watt White",
                            "type": "artist",
                            "uri": "spotify:artist:6Os3fHAI2Fma2UzTD91RU8"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 199008,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "US3DF1712295"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3UC76hBkfwLeXMaXCGvnTJ"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3UC76hBkfwLeXMaXCGvnTJ",
                    "id": "3UC76hBkfwLeXMaXCGvnTJ",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Eye Of The Storm",
                    "popularity": 64,
                    "preview_url": "https://p.scdn.co/mp3-preview/1bc96cc56584308a61128b88422ec9cd12d62fda?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:3UC76hBkfwLeXMaXCGvnTJ"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-05-01T14:29:52Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1xKrH6GSh9CJh8nYwbqW7B"
                                },
                                "href": "https://api.spotify.com/v1/artists/1xKrH6GSh9CJh8nYwbqW7B",
                                "id": "1xKrH6GSh9CJh8nYwbqW7B",
                                "name": "Welshly Arms",
                                "type": "artist",
                                "uri": "spotify:artist:1xKrH6GSh9CJh8nYwbqW7B"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/4UXg0K9s6iGFntzsrYDdWF"
                        },
                        "href": "https://api.spotify.com/v1/albums/4UXg0K9s6iGFntzsrYDdWF",
                        "id": "4UXg0K9s6iGFntzsrYDdWF",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273605fea88497f83c4881df0da",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02605fea88497f83c4881df0da",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851605fea88497f83c4881df0da",
                                "width": 64
                            }
                        ],
                        "name": "No Place Is Home",
                        "release_date": "2018-05-25",
                        "release_date_precision": "day",
                        "total_tracks": 13,
                        "type": "album",
                        "uri": "spotify:album:4UXg0K9s6iGFntzsrYDdWF"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1xKrH6GSh9CJh8nYwbqW7B"
                            },
                            "href": "https://api.spotify.com/v1/artists/1xKrH6GSh9CJh8nYwbqW7B",
                            "id": "1xKrH6GSh9CJh8nYwbqW7B",
                            "name": "Welshly Arms",
                            "type": "artist",
                            "uri": "spotify:artist:1xKrH6GSh9CJh8nYwbqW7B"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 232173,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "US43C1602374"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2bDENJyfbxj0neGiXUFvIX"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2bDENJyfbxj0neGiXUFvIX",
                    "id": "2bDENJyfbxj0neGiXUFvIX",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5ysL31dJXdNK1OCI5Hlqe7"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5ysL31dJXdNK1OCI5Hlqe7",
                        "id": "5ysL31dJXdNK1OCI5Hlqe7",
                        "type": "track",
                        "uri": "spotify:track:5ysL31dJXdNK1OCI5Hlqe7"
                    },
                    "name": "Legendary",
                    "popularity": 69,
                    "preview_url": "https://p.scdn.co/mp3-preview/e074b4230cbe355d7124218fea4b8ea31c4ff980?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 9,
                    "type": "track",
                    "uri": "spotify:track:2bDENJyfbxj0neGiXUFvIX"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-05-07T16:52:58Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5txAC0hwbFB09Nv8Y1hPJl"
                                },
                                "href": "https://api.spotify.com/v1/artists/5txAC0hwbFB09Nv8Y1hPJl",
                                "id": "5txAC0hwbFB09Nv8Y1hPJl",
                                "name": "Cult To Follow",
                                "type": "artist",
                                "uri": "spotify:artist:5txAC0hwbFB09Nv8Y1hPJl"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/6QxvlbjYCpl0csZp4jb9Nc"
                        },
                        "href": "https://api.spotify.com/v1/albums/6QxvlbjYCpl0csZp4jb9Nc",
                        "id": "6QxvlbjYCpl0csZp4jb9Nc",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27373df595d6eb87161a711cb23",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0273df595d6eb87161a711cb23",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485173df595d6eb87161a711cb23",
                                "width": 64
                            }
                        ],
                        "name": "Leave It All Behind - Single",
                        "release_date": "2011-12-20",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:6QxvlbjYCpl0csZp4jb9Nc"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5txAC0hwbFB09Nv8Y1hPJl"
                            },
                            "href": "https://api.spotify.com/v1/artists/5txAC0hwbFB09Nv8Y1hPJl",
                            "id": "5txAC0hwbFB09Nv8Y1hPJl",
                            "name": "Cult To Follow",
                            "type": "artist",
                            "uri": "spotify:artist:5txAC0hwbFB09Nv8Y1hPJl"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 224086,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "TCABC1194564"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4I58RPHVzDldHfK3t5HiZA"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4I58RPHVzDldHfK3t5HiZA",
                    "id": "4I58RPHVzDldHfK3t5HiZA",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Leave It All Behind",
                    "popularity": 63,
                    "preview_url": "https://p.scdn.co/mp3-preview/5e3fb81019525bbc7d5baff6cb637054c24df3ac?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:4I58RPHVzDldHfK3t5HiZA"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-05-07T16:54:45Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/14sYTbULWFBnWzbpUCeFWQ"
                                },
                                "href": "https://api.spotify.com/v1/artists/14sYTbULWFBnWzbpUCeFWQ",
                                "id": "14sYTbULWFBnWzbpUCeFWQ",
                                "name": "Papercut Massacre",
                                "type": "artist",
                                "uri": "spotify:artist:14sYTbULWFBnWzbpUCeFWQ"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/79ja3F08SCiOTPoh1Dgjc7"
                        },
                        "href": "https://api.spotify.com/v1/albums/79ja3F08SCiOTPoh1Dgjc7",
                        "id": "79ja3F08SCiOTPoh1Dgjc7",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273af3c69374521cf713617dbca",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02af3c69374521cf713617dbca",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851af3c69374521cf713617dbca",
                                "width": 64
                            }
                        ],
                        "name": "If These Scars Could Talk",
                        "release_date": "2009-01-01",
                        "release_date_precision": "day",
                        "total_tracks": 11,
                        "type": "album",
                        "uri": "spotify:album:79ja3F08SCiOTPoh1Dgjc7"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/14sYTbULWFBnWzbpUCeFWQ"
                            },
                            "href": "https://api.spotify.com/v1/artists/14sYTbULWFBnWzbpUCeFWQ",
                            "id": "14sYTbULWFBnWzbpUCeFWQ",
                            "name": "Papercut Massacre",
                            "type": "artist",
                            "uri": "spotify:artist:14sYTbULWFBnWzbpUCeFWQ"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 215093,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USWU30900061"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2J6qr3pC10jeEg7dSN9YHG"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2J6qr3pC10jeEg7dSN9YHG",
                    "id": "2J6qr3pC10jeEg7dSN9YHG",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/6m42f5aMvXXk1qbWIWwUoi"
                        },
                        "href": "https://api.spotify.com/v1/tracks/6m42f5aMvXXk1qbWIWwUoi",
                        "id": "6m42f5aMvXXk1qbWIWwUoi",
                        "type": "track",
                        "uri": "spotify:track:6m42f5aMvXXk1qbWIWwUoi"
                    },
                    "name": "Lose My Life",
                    "popularity": 53,
                    "preview_url": "https://p.scdn.co/mp3-preview/ecafe59fd0a7011744483e7ea10599678c382c8c?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 11,
                    "type": "track",
                    "uri": "spotify:track:2J6qr3pC10jeEg7dSN9YHG"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-06-02T08:04:27Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3gIRvgZssIb9aiirIg0nI3"
                                },
                                "href": "https://api.spotify.com/v1/artists/3gIRvgZssIb9aiirIg0nI3",
                                "id": "3gIRvgZssIb9aiirIg0nI3",
                                "name": "Jeremy Zucker",
                                "type": "artist",
                                "uri": "spotify:artist:3gIRvgZssIb9aiirIg0nI3"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5JMLG56F1X5mFmWNmS0iAp"
                                },
                                "href": "https://api.spotify.com/v1/artists/5JMLG56F1X5mFmWNmS0iAp",
                                "id": "5JMLG56F1X5mFmWNmS0iAp",
                                "name": "Chelsea Cutler",
                                "type": "artist",
                                "uri": "spotify:artist:5JMLG56F1X5mFmWNmS0iAp"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/470uUCHD2oYm66SIj2TcVV"
                        },
                        "href": "https://api.spotify.com/v1/albums/470uUCHD2oYm66SIj2TcVV",
                        "id": "470uUCHD2oYm66SIj2TcVV",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27351fefa0c83ff490d94974891",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0251fefa0c83ff490d94974891",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485151fefa0c83ff490d94974891",
                                "width": 64
                            }
                        ],
                        "name": "better off (filous Remix)",
                        "release_date": "2018-05-18",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:470uUCHD2oYm66SIj2TcVV"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3gIRvgZssIb9aiirIg0nI3"
                            },
                            "href": "https://api.spotify.com/v1/artists/3gIRvgZssIb9aiirIg0nI3",
                            "id": "3gIRvgZssIb9aiirIg0nI3",
                            "name": "Jeremy Zucker",
                            "type": "artist",
                            "uri": "spotify:artist:3gIRvgZssIb9aiirIg0nI3"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5JMLG56F1X5mFmWNmS0iAp"
                            },
                            "href": "https://api.spotify.com/v1/artists/5JMLG56F1X5mFmWNmS0iAp",
                            "id": "5JMLG56F1X5mFmWNmS0iAp",
                            "name": "Chelsea Cutler",
                            "type": "artist",
                            "uri": "spotify:artist:5JMLG56F1X5mFmWNmS0iAp"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2IjiuEObrCKyZvSb8xLxG9"
                            },
                            "href": "https://api.spotify.com/v1/artists/2IjiuEObrCKyZvSb8xLxG9",
                            "id": "2IjiuEObrCKyZvSb8xLxG9",
                            "name": "filous",
                            "type": "artist",
                            "uri": "spotify:artist:2IjiuEObrCKyZvSb8xLxG9"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 176346,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USUM71806628"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3PMsgFdVtCeTgjzE8X9TTs"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3PMsgFdVtCeTgjzE8X9TTs",
                    "id": "3PMsgFdVtCeTgjzE8X9TTs",
                    "is_local": false,
                    "is_playable": true,
                    "name": "better off - filous remix",
                    "popularity": 55,
                    "preview_url": "https://p.scdn.co/mp3-preview/a06bd0625c8cb55d1a7aaac15a1340de61632fdc?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:3PMsgFdVtCeTgjzE8X9TTs"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-06-04T17:40:16Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2q3GG88dVwuQPF4FmySr9I"
                                },
                                "href": "https://api.spotify.com/v1/artists/2q3GG88dVwuQPF4FmySr9I",
                                "id": "2q3GG88dVwuQPF4FmySr9I",
                                "name": "The Score",
                                "type": "artist",
                                "uri": "spotify:artist:2q3GG88dVwuQPF4FmySr9I"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/6pUg9RDDoVyQQVJ48FkmXz"
                        },
                        "href": "https://api.spotify.com/v1/albums/6pUg9RDDoVyQQVJ48FkmXz",
                        "id": "6pUg9RDDoVyQQVJ48FkmXz",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273d091700c7b2d8e69a79009e8",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02d091700c7b2d8e69a79009e8",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851d091700c7b2d8e69a79009e8",
                                "width": 64
                            }
                        ],
                        "name": "ATLAS",
                        "release_date": "2017-10-13",
                        "release_date_precision": "day",
                        "total_tracks": 12,
                        "type": "album",
                        "uri": "spotify:album:6pUg9RDDoVyQQVJ48FkmXz"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2q3GG88dVwuQPF4FmySr9I"
                            },
                            "href": "https://api.spotify.com/v1/artists/2q3GG88dVwuQPF4FmySr9I",
                            "id": "2q3GG88dVwuQPF4FmySr9I",
                            "name": "The Score",
                            "type": "artist",
                            "uri": "spotify:artist:2q3GG88dVwuQPF4FmySr9I"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 189120,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USUM71700853"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3SWqGa1J0M7hSBUDM0KePD"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3SWqGa1J0M7hSBUDM0KePD",
                    "id": "3SWqGa1J0M7hSBUDM0KePD",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/1WyibgQ0Yw4dFNlVkFsjfS"
                        },
                        "href": "https://api.spotify.com/v1/tracks/1WyibgQ0Yw4dFNlVkFsjfS",
                        "id": "1WyibgQ0Yw4dFNlVkFsjfS",
                        "type": "track",
                        "uri": "spotify:track:1WyibgQ0Yw4dFNlVkFsjfS"
                    },
                    "name": "Legend",
                    "popularity": 72,
                    "preview_url": "https://p.scdn.co/mp3-preview/f470e21705ea5d9866ec7998a273735b206332c3?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:3SWqGa1J0M7hSBUDM0KePD"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-07-10T09:29:29Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2q3GG88dVwuQPF4FmySr9I"
                                },
                                "href": "https://api.spotify.com/v1/artists/2q3GG88dVwuQPF4FmySr9I",
                                "id": "2q3GG88dVwuQPF4FmySr9I",
                                "name": "The Score",
                                "type": "artist",
                                "uri": "spotify:artist:2q3GG88dVwuQPF4FmySr9I"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/6pUg9RDDoVyQQVJ48FkmXz"
                        },
                        "href": "https://api.spotify.com/v1/albums/6pUg9RDDoVyQQVJ48FkmXz",
                        "id": "6pUg9RDDoVyQQVJ48FkmXz",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273d091700c7b2d8e69a79009e8",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02d091700c7b2d8e69a79009e8",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851d091700c7b2d8e69a79009e8",
                                "width": 64
                            }
                        ],
                        "name": "ATLAS",
                        "release_date": "2017-10-13",
                        "release_date_precision": "day",
                        "total_tracks": 12,
                        "type": "album",
                        "uri": "spotify:album:6pUg9RDDoVyQQVJ48FkmXz"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2q3GG88dVwuQPF4FmySr9I"
                            },
                            "href": "https://api.spotify.com/v1/artists/2q3GG88dVwuQPF4FmySr9I",
                            "id": "2q3GG88dVwuQPF4FmySr9I",
                            "name": "The Score",
                            "type": "artist",
                            "uri": "spotify:artist:2q3GG88dVwuQPF4FmySr9I"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 192106,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USUM71606282"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6rrKbzJGGDlSZgLphopS49"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6rrKbzJGGDlSZgLphopS49",
                    "id": "6rrKbzJGGDlSZgLphopS49",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Unstoppable",
                    "popularity": 71,
                    "preview_url": "https://p.scdn.co/mp3-preview/9dfa65cc15fd97444028530d2ba8a726542cb357?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 6,
                    "type": "track",
                    "uri": "spotify:track:6rrKbzJGGDlSZgLphopS49"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-07-12T11:08:17Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6g878dtAhjegRHVe5X0ALf"
                                },
                                "href": "https://api.spotify.com/v1/artists/6g878dtAhjegRHVe5X0ALf",
                                "id": "6g878dtAhjegRHVe5X0ALf",
                                "name": "Bryce Fox",
                                "type": "artist",
                                "uri": "spotify:artist:6g878dtAhjegRHVe5X0ALf"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/4Ldmb0AgDupMkstZDIPzZk"
                        },
                        "href": "https://api.spotify.com/v1/albums/4Ldmb0AgDupMkstZDIPzZk",
                        "id": "4Ldmb0AgDupMkstZDIPzZk",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2735852d5c90a48c2debadfe3d0",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e025852d5c90a48c2debadfe3d0",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048515852d5c90a48c2debadfe3d0",
                                "width": 64
                            }
                        ],
                        "name": "Heaven on Hold",
                        "release_date": "2017-10-20",
                        "release_date_precision": "day",
                        "total_tracks": 7,
                        "type": "album",
                        "uri": "spotify:album:4Ldmb0AgDupMkstZDIPzZk"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6g878dtAhjegRHVe5X0ALf"
                            },
                            "href": "https://api.spotify.com/v1/artists/6g878dtAhjegRHVe5X0ALf",
                            "id": "6g878dtAhjegRHVe5X0ALf",
                            "name": "Bryce Fox",
                            "type": "artist",
                            "uri": "spotify:artist:6g878dtAhjegRHVe5X0ALf"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 228386,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "QM24S1703904"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7qXTeIDkqZIexgdCXrxIrB"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7qXTeIDkqZIexgdCXrxIrB",
                    "id": "7qXTeIDkqZIexgdCXrxIrB",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Stomp Me Out",
                    "popularity": 55,
                    "preview_url": "https://p.scdn.co/mp3-preview/eabc722ec232aaa009379f933621fe36f97a9764?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:7qXTeIDkqZIexgdCXrxIrB"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-07-27T12:27:26Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/37Kwz8lKQipujhPpz9Q5cQ"
                                },
                                "href": "https://api.spotify.com/v1/artists/37Kwz8lKQipujhPpz9Q5cQ",
                                "id": "37Kwz8lKQipujhPpz9Q5cQ",
                                "name": "Rafferty",
                                "type": "artist",
                                "uri": "spotify:artist:37Kwz8lKQipujhPpz9Q5cQ"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/56ILDsDKcf17LunTaJFUR2"
                        },
                        "href": "https://api.spotify.com/v1/albums/56ILDsDKcf17LunTaJFUR2",
                        "id": "56ILDsDKcf17LunTaJFUR2",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273a0bed65a33174d63c96bf5ed",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02a0bed65a33174d63c96bf5ed",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851a0bed65a33174d63c96bf5ed",
                                "width": 64
                            }
                        ],
                        "name": "Apple Pie",
                        "release_date": "2016-07-11",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:56ILDsDKcf17LunTaJFUR2"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/37Kwz8lKQipujhPpz9Q5cQ"
                            },
                            "href": "https://api.spotify.com/v1/artists/37Kwz8lKQipujhPpz9Q5cQ",
                            "id": "37Kwz8lKQipujhPpz9Q5cQ",
                            "name": "Rafferty",
                            "type": "artist",
                            "uri": "spotify:artist:37Kwz8lKQipujhPpz9Q5cQ"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 179447,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "TCACP1670879"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7x7WyzZjrXd1oruLCcTnhw"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7x7WyzZjrXd1oruLCcTnhw",
                    "id": "7x7WyzZjrXd1oruLCcTnhw",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Apple Pie",
                    "popularity": 49,
                    "preview_url": "https://p.scdn.co/mp3-preview/22397443664a5096cd22a8ec82c719a7100c1beb?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:7x7WyzZjrXd1oruLCcTnhw"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-08-08T08:12:45Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4zjO8Jhi2pciJJzd8Q6rga"
                                },
                                "href": "https://api.spotify.com/v1/artists/4zjO8Jhi2pciJJzd8Q6rga",
                                "id": "4zjO8Jhi2pciJJzd8Q6rga",
                                "name": "Unlike Pluto",
                                "type": "artist",
                                "uri": "spotify:artist:4zjO8Jhi2pciJJzd8Q6rga"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/30ejUciK31BCg0IVCbt1dW"
                                },
                                "href": "https://api.spotify.com/v1/artists/30ejUciK31BCg0IVCbt1dW",
                                "id": "30ejUciK31BCg0IVCbt1dW",
                                "name": "Mike Taylor",
                                "type": "artist",
                                "uri": "spotify:artist:30ejUciK31BCg0IVCbt1dW"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/65QMh46zprwhLoYR9vOlVz"
                        },
                        "href": "https://api.spotify.com/v1/albums/65QMh46zprwhLoYR9vOlVz",
                        "id": "65QMh46zprwhLoYR9vOlVz",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27396957b0279e407485635f831",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0296957b0279e407485635f831",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485196957b0279e407485635f831",
                                "width": 64
                            }
                        ],
                        "name": "Everything Black",
                        "release_date": "2017-03-10",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:65QMh46zprwhLoYR9vOlVz"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4zjO8Jhi2pciJJzd8Q6rga"
                            },
                            "href": "https://api.spotify.com/v1/artists/4zjO8Jhi2pciJJzd8Q6rga",
                            "id": "4zjO8Jhi2pciJJzd8Q6rga",
                            "name": "Unlike Pluto",
                            "type": "artist",
                            "uri": "spotify:artist:4zjO8Jhi2pciJJzd8Q6rga"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/30ejUciK31BCg0IVCbt1dW"
                            },
                            "href": "https://api.spotify.com/v1/artists/30ejUciK31BCg0IVCbt1dW",
                            "id": "30ejUciK31BCg0IVCbt1dW",
                            "name": "Mike Taylor",
                            "type": "artist",
                            "uri": "spotify:artist:30ejUciK31BCg0IVCbt1dW"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 228979,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "CA6D21700049"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3UEnF6y5tyHVtMzldS3svp"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3UEnF6y5tyHVtMzldS3svp",
                    "id": "3UEnF6y5tyHVtMzldS3svp",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/5PwCuqzezD4a7mfxMNwk86"
                        },
                        "href": "https://api.spotify.com/v1/tracks/5PwCuqzezD4a7mfxMNwk86",
                        "id": "5PwCuqzezD4a7mfxMNwk86",
                        "type": "track",
                        "uri": "spotify:track:5PwCuqzezD4a7mfxMNwk86"
                    },
                    "name": "Everything Black",
                    "popularity": 72,
                    "preview_url": "https://p.scdn.co/mp3-preview/546a6247dc34daf941766a0ba6cb499d83a91af5?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:3UEnF6y5tyHVtMzldS3svp"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-08-13T15:23:30Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5DYAABs8rkY9VhwtENoQCz"
                                },
                                "href": "https://api.spotify.com/v1/artists/5DYAABs8rkY9VhwtENoQCz",
                                "id": "5DYAABs8rkY9VhwtENoQCz",
                                "name": "Gavin DeGraw",
                                "type": "artist",
                                "uri": "spotify:artist:5DYAABs8rkY9VhwtENoQCz"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/70ZsiClM7RBUsoTERq2qXu"
                        },
                        "href": "https://api.spotify.com/v1/albums/70ZsiClM7RBUsoTERq2qXu",
                        "id": "70ZsiClM7RBUsoTERq2qXu",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2730fd30a683e553dd4a676430c",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e020fd30a683e553dd4a676430c",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048510fd30a683e553dd4a676430c",
                                "width": 64
                            }
                        ],
                        "name": "Chariot",
                        "release_date": "2003-05-26",
                        "release_date_precision": "day",
                        "total_tracks": 24,
                        "type": "album",
                        "uri": "spotify:album:70ZsiClM7RBUsoTERq2qXu"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5DYAABs8rkY9VhwtENoQCz"
                            },
                            "href": "https://api.spotify.com/v1/artists/5DYAABs8rkY9VhwtENoQCz",
                            "id": "5DYAABs8rkY9VhwtENoQCz",
                            "name": "Gavin DeGraw",
                            "type": "artist",
                            "uri": "spotify:artist:5DYAABs8rkY9VhwtENoQCz"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 219080,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USJAY0300148"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/1ccNXmmgYnajJ8ulYYEK9Y"
                    },
                    "href": "https://api.spotify.com/v1/tracks/1ccNXmmgYnajJ8ulYYEK9Y",
                    "id": "1ccNXmmgYnajJ8ulYYEK9Y",
                    "is_local": false,
                    "is_playable": true,
                    "name": "I Don't Want to Be",
                    "popularity": 57,
                    "preview_url": "https://p.scdn.co/mp3-preview/fd882a55c2369251eea221f014bfbb351b5eb3c0?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 8,
                    "type": "track",
                    "uri": "spotify:track:1ccNXmmgYnajJ8ulYYEK9Y"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-08-13T15:41:35Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7LIy7KinYq7a83dUH6kvxT"
                                },
                                "href": "https://api.spotify.com/v1/artists/7LIy7KinYq7a83dUH6kvxT",
                                "id": "7LIy7KinYq7a83dUH6kvxT",
                                "name": "Zayde Wølf",
                                "type": "artist",
                                "uri": "spotify:artist:7LIy7KinYq7a83dUH6kvxT"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7FMlFMWvVuAtEVmKNbh1Uh"
                        },
                        "href": "https://api.spotify.com/v1/albums/7FMlFMWvVuAtEVmKNbh1Uh",
                        "id": "7FMlFMWvVuAtEVmKNbh1Uh",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27341739a27d54d738eaf3bf3ea",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0241739a27d54d738eaf3bf3ea",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485141739a27d54d738eaf3bf3ea",
                                "width": 64
                            }
                        ],
                        "name": "Golden Age",
                        "release_date": "2016-11-04",
                        "release_date_precision": "day",
                        "total_tracks": 14,
                        "type": "album",
                        "uri": "spotify:album:7FMlFMWvVuAtEVmKNbh1Uh"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7LIy7KinYq7a83dUH6kvxT"
                            },
                            "href": "https://api.spotify.com/v1/artists/7LIy7KinYq7a83dUH6kvxT",
                            "id": "7LIy7KinYq7a83dUH6kvxT",
                            "name": "Zayde Wølf",
                            "type": "artist",
                            "uri": "spotify:artist:7LIy7KinYq7a83dUH6kvxT"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 194771,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "TCACS1643163"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0RmUjJteEkkF5kKdhEfwNe"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0RmUjJteEkkF5kKdhEfwNe",
                    "id": "0RmUjJteEkkF5kKdhEfwNe",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7kaUCr6Ni2cK90bTNhXoqo"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7kaUCr6Ni2cK90bTNhXoqo",
                        "id": "7kaUCr6Ni2cK90bTNhXoqo",
                        "type": "track",
                        "uri": "spotify:track:7kaUCr6Ni2cK90bTNhXoqo"
                    },
                    "name": "Hustler",
                    "popularity": 59,
                    "preview_url": "https://p.scdn.co/mp3-preview/051fcf2f693650960649a9f9993b4cc41dcf7ab4?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:0RmUjJteEkkF5kKdhEfwNe"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-08-13T15:57:39Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3p5nfUyEYsxx8izMCym07n"
                                },
                                "href": "https://api.spotify.com/v1/artists/3p5nfUyEYsxx8izMCym07n",
                                "id": "3p5nfUyEYsxx8izMCym07n",
                                "name": "Oh The Larceny",
                                "type": "artist",
                                "uri": "spotify:artist:3p5nfUyEYsxx8izMCym07n"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/4hl7Lk0reDaY6BWHSvcZGc"
                        },
                        "href": "https://api.spotify.com/v1/albums/4hl7Lk0reDaY6BWHSvcZGc",
                        "id": "4hl7Lk0reDaY6BWHSvcZGc",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273972a2048dcdbd8a356dce361",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02972a2048dcdbd8a356dce361",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851972a2048dcdbd8a356dce361",
                                "width": 64
                            }
                        ],
                        "name": "Oh the Larceny",
                        "release_date": "2017-01-27",
                        "release_date_precision": "day",
                        "total_tracks": 5,
                        "type": "album",
                        "uri": "spotify:album:4hl7Lk0reDaY6BWHSvcZGc"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3p5nfUyEYsxx8izMCym07n"
                            },
                            "href": "https://api.spotify.com/v1/artists/3p5nfUyEYsxx8izMCym07n",
                            "id": "3p5nfUyEYsxx8izMCym07n",
                            "name": "Oh The Larceny",
                            "type": "artist",
                            "uri": "spotify:artist:3p5nfUyEYsxx8izMCym07n"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 180505,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "US43C1603402"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/04XYta6MBb5BuZIPCiAloe"
                    },
                    "href": "https://api.spotify.com/v1/tracks/04XYta6MBb5BuZIPCiAloe",
                    "id": "04XYta6MBb5BuZIPCiAloe",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7MJqQ2IkyuXNJieZtxkaGr"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7MJqQ2IkyuXNJieZtxkaGr",
                        "id": "7MJqQ2IkyuXNJieZtxkaGr",
                        "type": "track",
                        "uri": "spotify:track:7MJqQ2IkyuXNJieZtxkaGr"
                    },
                    "name": "Can't Stop Me Now",
                    "popularity": 57,
                    "preview_url": "https://p.scdn.co/mp3-preview/ec68baa35b2e4bc36f6f0244908c6aa2f1249a41?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:04XYta6MBb5BuZIPCiAloe"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2018-12-17T17:47:46Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5teuZRCtxzfuYW98XOwtxu"
                                },
                                "href": "https://api.spotify.com/v1/artists/5teuZRCtxzfuYW98XOwtxu",
                                "id": "5teuZRCtxzfuYW98XOwtxu",
                                "name": "The Haggis Horns",
                                "type": "artist",
                                "uri": "spotify:artist:5teuZRCtxzfuYW98XOwtxu"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/2hs8mdiV2Ace1WZKt9IPJ8"
                        },
                        "href": "https://api.spotify.com/v1/albums/2hs8mdiV2Ace1WZKt9IPJ8",
                        "id": "2hs8mdiV2Ace1WZKt9IPJ8",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2736c43df81a9454de4548a1657",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e026c43df81a9454de4548a1657",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048516c43df81a9454de4548a1657",
                                "width": 64
                            }
                        ],
                        "name": "One of These Days",
                        "release_date": "2017-11-03",
                        "release_date_precision": "day",
                        "total_tracks": 9,
                        "type": "album",
                        "uri": "spotify:album:2hs8mdiV2Ace1WZKt9IPJ8"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5teuZRCtxzfuYW98XOwtxu"
                            },
                            "href": "https://api.spotify.com/v1/artists/5teuZRCtxzfuYW98XOwtxu",
                            "id": "5teuZRCtxzfuYW98XOwtxu",
                            "name": "The Haggis Horns",
                            "type": "artist",
                            "uri": "spotify:artist:5teuZRCtxzfuYW98XOwtxu"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5evjncuGxkRaUy6f6DNO0g"
                            },
                            "href": "https://api.spotify.com/v1/artists/5evjncuGxkRaUy6f6DNO0g",
                            "id": "5evjncuGxkRaUy6f6DNO0g",
                            "name": "Lucinda Slim",
                            "type": "artist",
                            "uri": "spotify:artist:5evjncuGxkRaUy6f6DNO0g"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 295133,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "UKB631700005"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/17YDXy3iaj6De4pcCyxlGB"
                    },
                    "href": "https://api.spotify.com/v1/tracks/17YDXy3iaj6De4pcCyxlGB",
                    "id": "17YDXy3iaj6De4pcCyxlGB",
                    "is_local": false,
                    "is_playable": true,
                    "name": "New York Beat (feat. Lucinda Slim)",
                    "popularity": 35,
                    "preview_url": "https://p.scdn.co/mp3-preview/539d350a724d540901ccdda4f02bd8a750ce6db3?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:17YDXy3iaj6De4pcCyxlGB"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-01-25T23:38:06Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0XtVN1QaB7vYRpw4qEIRt0"
                                },
                                "href": "https://api.spotify.com/v1/artists/0XtVN1QaB7vYRpw4qEIRt0",
                                "id": "0XtVN1QaB7vYRpw4qEIRt0",
                                "name": "Ours Samplus",
                                "type": "artist",
                                "uri": "spotify:artist:0XtVN1QaB7vYRpw4qEIRt0"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/5J3L8ukBVqikwoSN9Mv5sk"
                        },
                        "href": "https://api.spotify.com/v1/albums/5J3L8ukBVqikwoSN9Mv5sk",
                        "id": "5J3L8ukBVqikwoSN9Mv5sk",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2737e051b8a96c9df101ce90993",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e027e051b8a96c9df101ce90993",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048517e051b8a96c9df101ce90993",
                                "width": 64
                            }
                        ],
                        "name": "Isteri",
                        "release_date": "2014-01-10",
                        "release_date_precision": "day",
                        "total_tracks": 7,
                        "type": "album",
                        "uri": "spotify:album:5J3L8ukBVqikwoSN9Mv5sk"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0XtVN1QaB7vYRpw4qEIRt0"
                            },
                            "href": "https://api.spotify.com/v1/artists/0XtVN1QaB7vYRpw4qEIRt0",
                            "id": "0XtVN1QaB7vYRpw4qEIRt0",
                            "name": "Ours Samplus",
                            "type": "artist",
                            "uri": "spotify:artist:0XtVN1QaB7vYRpw4qEIRt0"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 240000,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "FR9W11424565"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5w2zI2TnxiP4DMcsA0P30M"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5w2zI2TnxiP4DMcsA0P30M",
                    "id": "5w2zI2TnxiP4DMcsA0P30M",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Spell on You",
                    "popularity": 46,
                    "preview_url": "https://p.scdn.co/mp3-preview/f8da6f110b42f2dc52f1be91ba4ae0ff66fce6e0?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:5w2zI2TnxiP4DMcsA0P30M"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-16T01:45:46Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2q3GG88dVwuQPF4FmySr9I"
                                },
                                "href": "https://api.spotify.com/v1/artists/2q3GG88dVwuQPF4FmySr9I",
                                "id": "2q3GG88dVwuQPF4FmySr9I",
                                "name": "The Score",
                                "type": "artist",
                                "uri": "spotify:artist:2q3GG88dVwuQPF4FmySr9I"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/4enE8eppWJ9fQXLqTP2TDE"
                        },
                        "href": "https://api.spotify.com/v1/albums/4enE8eppWJ9fQXLqTP2TDE",
                        "id": "4enE8eppWJ9fQXLqTP2TDE",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27384f08a509689b140f1bf931d",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0284f08a509689b140f1bf931d",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485184f08a509689b140f1bf931d",
                                "width": 64
                            }
                        ],
                        "name": "Pressure",
                        "release_date": "2019-02-01",
                        "release_date_precision": "day",
                        "total_tracks": 6,
                        "type": "album",
                        "uri": "spotify:album:4enE8eppWJ9fQXLqTP2TDE"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2q3GG88dVwuQPF4FmySr9I"
                            },
                            "href": "https://api.spotify.com/v1/artists/2q3GG88dVwuQPF4FmySr9I",
                            "id": "2q3GG88dVwuQPF4FmySr9I",
                            "name": "The Score",
                            "type": "artist",
                            "uri": "spotify:artist:2q3GG88dVwuQPF4FmySr9I"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 166693,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USUM71809164"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6hypt8VPJxeMXTTcRUHS86"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6hypt8VPJxeMXTTcRUHS86",
                    "id": "6hypt8VPJxeMXTTcRUHS86",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Glory",
                    "popularity": 68,
                    "preview_url": "https://p.scdn.co/mp3-preview/a297aa234b743d63ed473434af26918549e2d284?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 6,
                    "type": "track",
                    "uri": "spotify:track:6hypt8VPJxeMXTTcRUHS86"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-16T01:49:45Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0yb46jwm7gqbZXVXZQ8Z1e"
                                },
                                "href": "https://api.spotify.com/v1/artists/0yb46jwm7gqbZXVXZQ8Z1e",
                                "id": "0yb46jwm7gqbZXVXZQ8Z1e",
                                "name": "Bishop Briggs",
                                "type": "artist",
                                "uri": "spotify:artist:0yb46jwm7gqbZXVXZQ8Z1e"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/1TTxcgs3zEngN0EB56yXzY"
                        },
                        "href": "https://api.spotify.com/v1/albums/1TTxcgs3zEngN0EB56yXzY",
                        "id": "1TTxcgs3zEngN0EB56yXzY",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2738cae5034066af45cdfbc4266",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e028cae5034066af45cdfbc4266",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048518cae5034066af45cdfbc4266",
                                "width": 64
                            }
                        ],
                        "name": "Church Of Scars",
                        "release_date": "2018-04-20",
                        "release_date_precision": "day",
                        "total_tracks": 10,
                        "type": "album",
                        "uri": "spotify:album:1TTxcgs3zEngN0EB56yXzY"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0yb46jwm7gqbZXVXZQ8Z1e"
                            },
                            "href": "https://api.spotify.com/v1/artists/0yb46jwm7gqbZXVXZQ8Z1e",
                            "id": "0yb46jwm7gqbZXVXZQ8Z1e",
                            "name": "Bishop Briggs",
                            "type": "artist",
                            "uri": "spotify:artist:0yb46jwm7gqbZXVXZQ8Z1e"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 230586,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "QMEU31717078"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2ph6BRhGcUzc2W9wIulG5k"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2ph6BRhGcUzc2W9wIulG5k",
                    "id": "2ph6BRhGcUzc2W9wIulG5k",
                    "is_local": false,
                    "is_playable": true,
                    "name": "White Flag",
                    "popularity": 67,
                    "preview_url": "https://p.scdn.co/mp3-preview/9e1f8751213b4193c71e905ac7a4850f72e0ea05?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 4,
                    "type": "track",
                    "uri": "spotify:track:2ph6BRhGcUzc2W9wIulG5k"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-20T11:12:08Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4fClmcYOLFAp5rrKUqLHAI"
                                },
                                "href": "https://api.spotify.com/v1/artists/4fClmcYOLFAp5rrKUqLHAI",
                                "id": "4fClmcYOLFAp5rrKUqLHAI",
                                "name": "JAXSON GAMBLE",
                                "type": "artist",
                                "uri": "spotify:artist:4fClmcYOLFAp5rrKUqLHAI"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/0s2OgxaMo0HxE7FA9qCSTC"
                        },
                        "href": "https://api.spotify.com/v1/albums/0s2OgxaMo0HxE7FA9qCSTC",
                        "id": "0s2OgxaMo0HxE7FA9qCSTC",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2739c38658b3a5ee7ab7749e7a5",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e029c38658b3a5ee7ab7749e7a5",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048519c38658b3a5ee7ab7749e7a5",
                                "width": 64
                            }
                        ],
                        "name": "GOLDBLOODED",
                        "release_date": "2018-11-16",
                        "release_date_precision": "day",
                        "total_tracks": 12,
                        "type": "album",
                        "uri": "spotify:album:0s2OgxaMo0HxE7FA9qCSTC"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4fClmcYOLFAp5rrKUqLHAI"
                            },
                            "href": "https://api.spotify.com/v1/artists/4fClmcYOLFAp5rrKUqLHAI",
                            "id": "4fClmcYOLFAp5rrKUqLHAI",
                            "name": "JAXSON GAMBLE",
                            "type": "artist",
                            "uri": "spotify:artist:4fClmcYOLFAp5rrKUqLHAI"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 180000,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USQY51600467"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2dQLffulyZHoOxcvSeYCZ4"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2dQLffulyZHoOxcvSeYCZ4",
                    "id": "2dQLffulyZHoOxcvSeYCZ4",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Won't Go Down Easy",
                    "popularity": 51,
                    "preview_url": "https://p.scdn.co/mp3-preview/422c06af3ff072c1a4f9c7388f4471b942bc05db?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 3,
                    "type": "track",
                    "uri": "spotify:track:2dQLffulyZHoOxcvSeYCZ4"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-21T07:45:53Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5l3tNPRdYOqGm2gL4A0qKk"
                                },
                                "href": "https://api.spotify.com/v1/artists/5l3tNPRdYOqGm2gL4A0qKk",
                                "id": "5l3tNPRdYOqGm2gL4A0qKk",
                                "name": "Esterly",
                                "type": "artist",
                                "uri": "spotify:artist:5l3tNPRdYOqGm2gL4A0qKk"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/0OKKrCsvzRk9xyccrnlrDD"
                        },
                        "href": "https://api.spotify.com/v1/albums/0OKKrCsvzRk9xyccrnlrDD",
                        "id": "0OKKrCsvzRk9xyccrnlrDD",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2733d5d6b3162ab127619a701be",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e023d5d6b3162ab127619a701be",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048513d5d6b3162ab127619a701be",
                                "width": 64
                            }
                        ],
                        "name": "This Is My World (feat. Austin Jenckes)",
                        "release_date": "2016-11-18",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:0OKKrCsvzRk9xyccrnlrDD"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5l3tNPRdYOqGm2gL4A0qKk"
                            },
                            "href": "https://api.spotify.com/v1/artists/5l3tNPRdYOqGm2gL4A0qKk",
                            "id": "5l3tNPRdYOqGm2gL4A0qKk",
                            "name": "Esterly",
                            "type": "artist",
                            "uri": "spotify:artist:5l3tNPRdYOqGm2gL4A0qKk"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6kzm1s9Z0leq5UTGwouVTA"
                            },
                            "href": "https://api.spotify.com/v1/artists/6kzm1s9Z0leq5UTGwouVTA",
                            "id": "6kzm1s9Z0leq5UTGwouVTA",
                            "name": "Austin Jenckes",
                            "type": "artist",
                            "uri": "spotify:artist:6kzm1s9Z0leq5UTGwouVTA"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 189767,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "TCACT1673917"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7MDodkSe7ZQM45Vj9vOMUt"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7MDodkSe7ZQM45Vj9vOMUt",
                    "id": "7MDodkSe7ZQM45Vj9vOMUt",
                    "is_local": false,
                    "is_playable": true,
                    "name": "This Is My World (feat. Austin Jenckes)",
                    "popularity": 53,
                    "preview_url": "https://p.scdn.co/mp3-preview/41289b19bc2055330a510d06cc3265fa9cd0270c?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:7MDodkSe7ZQM45Vj9vOMUt"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-21T08:03:11Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6IOvhXyk5edbA2DVaeP9Up"
                                },
                                "href": "https://api.spotify.com/v1/artists/6IOvhXyk5edbA2DVaeP9Up",
                                "id": "6IOvhXyk5edbA2DVaeP9Up",
                                "name": "Dorothy",
                                "type": "artist",
                                "uri": "spotify:artist:6IOvhXyk5edbA2DVaeP9Up"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/6QRQuIulSyoqOlNGJGLkmG"
                        },
                        "href": "https://api.spotify.com/v1/albums/6QRQuIulSyoqOlNGJGLkmG",
                        "id": "6QRQuIulSyoqOlNGJGLkmG",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2736fee3322c994063da20ab6e1",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e026fee3322c994063da20ab6e1",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048516fee3322c994063da20ab6e1",
                                "width": 64
                            }
                        ],
                        "name": "Down To The Bottom",
                        "release_date": "2017-05-05",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:6QRQuIulSyoqOlNGJGLkmG"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6IOvhXyk5edbA2DVaeP9Up"
                            },
                            "href": "https://api.spotify.com/v1/artists/6IOvhXyk5edbA2DVaeP9Up",
                            "id": "6IOvhXyk5edbA2DVaeP9Up",
                            "name": "Dorothy",
                            "type": "artist",
                            "uri": "spotify:artist:6IOvhXyk5edbA2DVaeP9Up"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 152468,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "QMJMT1701255"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5jddjli3YTIxueb3xFdLaA"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5jddjli3YTIxueb3xFdLaA",
                    "id": "5jddjli3YTIxueb3xFdLaA",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Down To The Bottom",
                    "popularity": 53,
                    "preview_url": "https://p.scdn.co/mp3-preview/781b113794384fc02bc60a094c9d1a28e2f9365b?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:5jddjli3YTIxueb3xFdLaA"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-21T08:05:33Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6IOvhXyk5edbA2DVaeP9Up"
                                },
                                "href": "https://api.spotify.com/v1/artists/6IOvhXyk5edbA2DVaeP9Up",
                                "id": "6IOvhXyk5edbA2DVaeP9Up",
                                "name": "Dorothy",
                                "type": "artist",
                                "uri": "spotify:artist:6IOvhXyk5edbA2DVaeP9Up"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/5AYoffF42E0cgDuuNgzYir"
                        },
                        "href": "https://api.spotify.com/v1/albums/5AYoffF42E0cgDuuNgzYir",
                        "id": "5AYoffF42E0cgDuuNgzYir",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2735f2f9aa9ccd1c30c1eab0124",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e025f2f9aa9ccd1c30c1eab0124",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048515f2f9aa9ccd1c30c1eab0124",
                                "width": 64
                            }
                        ],
                        "name": "ROCKISDEAD",
                        "release_date": "2016-06-24",
                        "release_date_precision": "day",
                        "total_tracks": 11,
                        "type": "album",
                        "uri": "spotify:album:5AYoffF42E0cgDuuNgzYir"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6IOvhXyk5edbA2DVaeP9Up"
                            },
                            "href": "https://api.spotify.com/v1/artists/6IOvhXyk5edbA2DVaeP9Up",
                            "id": "6IOvhXyk5edbA2DVaeP9Up",
                            "name": "Dorothy",
                            "type": "artist",
                            "uri": "spotify:artist:6IOvhXyk5edbA2DVaeP9Up"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 204225,
                    "episode": false,
                    "explicit": true,
                    "external_ids": {
                        "isrc": "QMJMT1500810"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/4gUteMcpbt8S7PMc5Wy6uS"
                    },
                    "href": "https://api.spotify.com/v1/tracks/4gUteMcpbt8S7PMc5Wy6uS",
                    "id": "4gUteMcpbt8S7PMc5Wy6uS",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Missile",
                    "popularity": 55,
                    "preview_url": "https://p.scdn.co/mp3-preview/c0e3b079fd93f2f7266c045a7eb5ef08b7a89b19?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 10,
                    "type": "track",
                    "uri": "spotify:track:4gUteMcpbt8S7PMc5Wy6uS"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-21T08:08:51Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
                                },
                                "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
                                "id": "53XhwfbYqKCa1cC15pYq2q",
                                "name": "Imagine Dragons",
                                "type": "artist",
                                "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/33pt9HBdGlAbRGBHQgsZsU"
                        },
                        "href": "https://api.spotify.com/v1/albums/33pt9HBdGlAbRGBHQgsZsU",
                        "id": "33pt9HBdGlAbRGBHQgsZsU",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2735675e83f707f1d7271e5cf8a",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e025675e83f707f1d7271e5cf8a",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048515675e83f707f1d7271e5cf8a",
                                "width": 64
                            }
                        ],
                        "name": "Evolve",
                        "release_date": "2017-06-23",
                        "release_date_precision": "day",
                        "total_tracks": 12,
                        "type": "album",
                        "uri": "spotify:album:33pt9HBdGlAbRGBHQgsZsU"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q"
                            },
                            "href": "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
                            "id": "53XhwfbYqKCa1cC15pYq2q",
                            "name": "Imagine Dragons",
                            "type": "artist",
                            "uri": "spotify:artist:53XhwfbYqKCa1cC15pYq2q"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 204346,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USUM71700626"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0pqnGHJpmpxLKifKRmU6WP"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0pqnGHJpmpxLKifKRmU6WP",
                    "id": "0pqnGHJpmpxLKifKRmU6WP",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Believer",
                    "popularity": 87,
                    "preview_url": "https://p.scdn.co/mp3-preview/a14b2a107bcd428e168944adae846bbc05fabd09?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 4,
                    "type": "track",
                    "uri": "spotify:track:0pqnGHJpmpxLKifKRmU6WP"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-21T08:10:32Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/5p6wXe8rGh3RBbhZlLj9qU"
                                },
                                "href": "https://api.spotify.com/v1/artists/5p6wXe8rGh3RBbhZlLj9qU",
                                "id": "5p6wXe8rGh3RBbhZlLj9qU",
                                "name": "Jonathan Tyler",
                                "type": "artist",
                                "uri": "spotify:artist:5p6wXe8rGh3RBbhZlLj9qU"
                            },
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1GpwgKzyUlA384o6IKrNIM"
                                },
                                "href": "https://api.spotify.com/v1/artists/1GpwgKzyUlA384o6IKrNIM",
                                "id": "1GpwgKzyUlA384o6IKrNIM",
                                "name": "The Northern Lights",
                                "type": "artist",
                                "uri": "spotify:artist:1GpwgKzyUlA384o6IKrNIM"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7GYjzzYMduxXjJ3dUK24Ed"
                        },
                        "href": "https://api.spotify.com/v1/albums/7GYjzzYMduxXjJ3dUK24Ed",
                        "id": "7GYjzzYMduxXjJ3dUK24Ed",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2732d8d1795e3cb3fb02708f6a1",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e022d8d1795e3cb3fb02708f6a1",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048512d8d1795e3cb3fb02708f6a1",
                                "width": 64
                            }
                        ],
                        "name": "Pardon Me",
                        "release_date": "2010-04-16",
                        "release_date_precision": "day",
                        "total_tracks": 11,
                        "type": "album",
                        "uri": "spotify:album:7GYjzzYMduxXjJ3dUK24Ed"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0ojbcl4680K7tn6aPicIaP"
                            },
                            "href": "https://api.spotify.com/v1/artists/0ojbcl4680K7tn6aPicIaP",
                            "id": "0ojbcl4680K7tn6aPicIaP",
                            "name": "Jonathan Tyler & The Northern Lights",
                            "type": "artist",
                            "uri": "spotify:artist:0ojbcl4680K7tn6aPicIaP"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 218440,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USAT21000024"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3loLDTxBVsHus9RAERxSH1"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3loLDTxBVsHus9RAERxSH1",
                    "id": "3loLDTxBVsHus9RAERxSH1",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Gypsy Woman",
                    "popularity": 49,
                    "preview_url": "https://p.scdn.co/mp3-preview/09209104d2c5d18dba1229bc15fafe62ae691904?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 4,
                    "type": "track",
                    "uri": "spotify:track:3loLDTxBVsHus9RAERxSH1"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-21T08:14:04Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/4f9iBmdUOhQWeP7dcAn1pf"
                                },
                                "href": "https://api.spotify.com/v1/artists/4f9iBmdUOhQWeP7dcAn1pf",
                                "id": "4f9iBmdUOhQWeP7dcAn1pf",
                                "name": "Rag'n'Bone Man",
                                "type": "artist",
                                "uri": "spotify:artist:4f9iBmdUOhQWeP7dcAn1pf"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/1rMmiDKa8V5H9yYTPAbLng"
                        },
                        "href": "https://api.spotify.com/v1/albums/1rMmiDKa8V5H9yYTPAbLng",
                        "id": "1rMmiDKa8V5H9yYTPAbLng",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27390a788beadaad34ff684d3ec",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0290a788beadaad34ff684d3ec",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485190a788beadaad34ff684d3ec",
                                "width": 64
                            }
                        ],
                        "name": "Human (Deluxe)",
                        "release_date": "2017-02-10",
                        "release_date_precision": "day",
                        "total_tracks": 19,
                        "type": "album",
                        "uri": "spotify:album:1rMmiDKa8V5H9yYTPAbLng"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/4f9iBmdUOhQWeP7dcAn1pf"
                            },
                            "href": "https://api.spotify.com/v1/artists/4f9iBmdUOhQWeP7dcAn1pf",
                            "id": "4f9iBmdUOhQWeP7dcAn1pf",
                            "name": "Rag'n'Bone Man",
                            "type": "artist",
                            "uri": "spotify:artist:4f9iBmdUOhQWeP7dcAn1pf"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 200186,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "GBARL1600665"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/58zsLZPvfflaiIbNWoA22O"
                    },
                    "href": "https://api.spotify.com/v1/tracks/58zsLZPvfflaiIbNWoA22O",
                    "id": "58zsLZPvfflaiIbNWoA22O",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Human",
                    "popularity": 77,
                    "preview_url": "https://p.scdn.co/mp3-preview/986d03f0f255aba008564dc6364d8ffc17e46704?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:58zsLZPvfflaiIbNWoA22O"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-21T08:18:18Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
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
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/3TuVfQxuglQcS7qb2i9FpB"
                        },
                        "href": "https://api.spotify.com/v1/albums/3TuVfQxuglQcS7qb2i9FpB",
                        "id": "3TuVfQxuglQcS7qb2i9FpB",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273139d2890029d0d92fa728374",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02139d2890029d0d92fa728374",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851139d2890029d0d92fa728374",
                                "width": 64
                            }
                        ],
                        "name": "Outlaw Blues 2",
                        "release_date": "2015-02-07",
                        "release_date_precision": "day",
                        "total_tracks": 11,
                        "type": "album",
                        "uri": "spotify:album:3TuVfQxuglQcS7qb2i9FpB"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5AVBFCn4Hq4KY2Xjc5Gj4y"
                            },
                            "href": "https://api.spotify.com/v1/artists/5AVBFCn4Hq4KY2Xjc5Gj4y",
                            "id": "5AVBFCn4Hq4KY2Xjc5Gj4y",
                            "name": "Blues Saraceno",
                            "type": "artist",
                            "uri": "spotify:artist:5AVBFCn4Hq4KY2Xjc5Gj4y"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 206037,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "GBBPP1508501"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2YkcoPZi3jwGfa7r1RRhV2"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2YkcoPZi3jwGfa7r1RRhV2",
                    "id": "2YkcoPZi3jwGfa7r1RRhV2",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Bad Man",
                    "popularity": 48,
                    "preview_url": "https://p.scdn.co/mp3-preview/06a4e0aed16e1c6ff1d8af28dc0f1cc959cb53f0?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:2YkcoPZi3jwGfa7r1RRhV2"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-23T21:02:15Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0vYkHhJ48Bs3jWcvZXvOrP"
                                },
                                "href": "https://api.spotify.com/v1/artists/0vYkHhJ48Bs3jWcvZXvOrP",
                                "id": "0vYkHhJ48Bs3jWcvZXvOrP",
                                "name": "Patti Smith",
                                "type": "artist",
                                "uri": "spotify:artist:0vYkHhJ48Bs3jWcvZXvOrP"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7jmAoRWQ9qUXtRXUOW2agu"
                        },
                        "href": "https://api.spotify.com/v1/albums/7jmAoRWQ9qUXtRXUOW2agu",
                        "id": "7jmAoRWQ9qUXtRXUOW2agu",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273cbab74c35a2a9f51af127037",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02cbab74c35a2a9f51af127037",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851cbab74c35a2a9f51af127037",
                                "width": 64
                            }
                        ],
                        "name": "Radio Ethiopia",
                        "release_date": "1976",
                        "release_date_precision": "year",
                        "total_tracks": 9,
                        "type": "album",
                        "uri": "spotify:album:7jmAoRWQ9qUXtRXUOW2agu"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0vYkHhJ48Bs3jWcvZXvOrP"
                            },
                            "href": "https://api.spotify.com/v1/artists/0vYkHhJ48Bs3jWcvZXvOrP",
                            "id": "0vYkHhJ48Bs3jWcvZXvOrP",
                            "name": "Patti Smith",
                            "type": "artist",
                            "uri": "spotify:artist:0vYkHhJ48Bs3jWcvZXvOrP"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 426466,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USAR19900946"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6Y2b9a0krc2a0nQEnAWRZE"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6Y2b9a0krc2a0nQEnAWRZE",
                    "id": "6Y2b9a0krc2a0nQEnAWRZE",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Poppies",
                    "popularity": 29,
                    "preview_url": "https://p.scdn.co/mp3-preview/d71987f7e658b6c3414f60f69b56c073818fca0e?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 3,
                    "type": "track",
                    "uri": "spotify:track:6Y2b9a0krc2a0nQEnAWRZE"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-27T18:31:08Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1Xylc3o4UrD53lo9CvFvVg"
                                },
                                "href": "https://api.spotify.com/v1/artists/1Xylc3o4UrD53lo9CvFvVg",
                                "id": "1Xylc3o4UrD53lo9CvFvVg",
                                "name": "Zara Larsson",
                                "type": "artist",
                                "uri": "spotify:artist:1Xylc3o4UrD53lo9CvFvVg"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/0vXJ3rh6Sy7KWjp2P5d7ll"
                        },
                        "href": "https://api.spotify.com/v1/albums/0vXJ3rh6Sy7KWjp2P5d7ll",
                        "id": "0vXJ3rh6Sy7KWjp2P5d7ll",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273a9eccb7ff0ef93cba9e4da5d",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02a9eccb7ff0ef93cba9e4da5d",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851a9eccb7ff0ef93cba9e4da5d",
                                "width": 64
                            }
                        ],
                        "name": "Uncover",
                        "release_date": "2012",
                        "release_date_precision": "year",
                        "total_tracks": 6,
                        "type": "album",
                        "uri": "spotify:album:0vXJ3rh6Sy7KWjp2P5d7ll"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1Xylc3o4UrD53lo9CvFvVg"
                            },
                            "href": "https://api.spotify.com/v1/artists/1Xylc3o4UrD53lo9CvFvVg",
                            "id": "1Xylc3o4UrD53lo9CvFvVg",
                            "name": "Zara Larsson",
                            "type": "artist",
                            "uri": "spotify:artist:1Xylc3o4UrD53lo9CvFvVg"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 213543,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "SEWEE1201112"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/3DQisSEr1TLp9H0BEeKiQS"
                    },
                    "href": "https://api.spotify.com/v1/tracks/3DQisSEr1TLp9H0BEeKiQS",
                    "id": "3DQisSEr1TLp9H0BEeKiQS",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Uncover",
                    "popularity": 66,
                    "preview_url": "https://p.scdn.co/mp3-preview/1ee901eae93c71f55bcdcd7ebdac8c203239d305?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 3,
                    "type": "track",
                    "uri": "spotify:track:3DQisSEr1TLp9H0BEeKiQS"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2019-12-29T17:43:16Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
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
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/3gUUrvvTs1JlX5AjiKRV0P"
                        },
                        "href": "https://api.spotify.com/v1/albums/3gUUrvvTs1JlX5AjiKRV0P",
                        "id": "3gUUrvvTs1JlX5AjiKRV0P",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27314574fcb569eeea21f829bb4",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0214574fcb569eeea21f829bb4",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485114574fcb569eeea21f829bb4",
                                "width": 64
                            }
                        ],
                        "name": "A Goofy Movie",
                        "release_date": "1995-01-01",
                        "release_date_precision": "day",
                        "total_tracks": 13,
                        "type": "album",
                        "uri": "spotify:album:3gUUrvvTs1JlX5AjiKRV0P"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5VfqJBmXcf6ZqXoGij5qTE"
                            },
                            "href": "https://api.spotify.com/v1/artists/5VfqJBmXcf6ZqXoGij5qTE",
                            "id": "5VfqJBmXcf6ZqXoGij5qTE",
                            "name": "Tevin Campbell",
                            "type": "artist",
                            "uri": "spotify:artist:5VfqJBmXcf6ZqXoGij5qTE"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1HRiWIhV7rgiL74L2AqZ5W"
                            },
                            "href": "https://api.spotify.com/v1/artists/1HRiWIhV7rgiL74L2AqZ5W",
                            "id": "1HRiWIhV7rgiL74L2AqZ5W",
                            "name": "Rosie Gaines",
                            "type": "artist",
                            "uri": "spotify:artist:1HRiWIhV7rgiL74L2AqZ5W"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 241386,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USWD10321730"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7lPxGs556PD8H3bUd9LzHp"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7lPxGs556PD8H3bUd9LzHp",
                    "id": "7lPxGs556PD8H3bUd9LzHp",
                    "is_local": false,
                    "is_playable": true,
                    "linked_from": {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/track/7hvWFe4F6fbyjbEFCmSBIm"
                        },
                        "href": "https://api.spotify.com/v1/tracks/7hvWFe4F6fbyjbEFCmSBIm",
                        "id": "7hvWFe4F6fbyjbEFCmSBIm",
                        "type": "track",
                        "uri": "spotify:track:7hvWFe4F6fbyjbEFCmSBIm"
                    },
                    "name": "I2I",
                    "popularity": 54,
                    "preview_url": "https://p.scdn.co/mp3-preview/a835186fb1d0169507ec6a55ac55701705390958?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:7lPxGs556PD8H3bUd9LzHp"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-01-17T18:08:47Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/35RvGPQ1OxbEZknWyiaAcs"
                                },
                                "href": "https://api.spotify.com/v1/artists/35RvGPQ1OxbEZknWyiaAcs",
                                "id": "35RvGPQ1OxbEZknWyiaAcs",
                                "name": "Two Another",
                                "type": "artist",
                                "uri": "spotify:artist:35RvGPQ1OxbEZknWyiaAcs"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/6xyOg4RcE30zIWxXd1VRwZ"
                        },
                        "href": "https://api.spotify.com/v1/albums/6xyOg4RcE30zIWxXd1VRwZ",
                        "id": "6xyOg4RcE30zIWxXd1VRwZ",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273f79eff1221461e079b16efc6",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02f79eff1221461e079b16efc6",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851f79eff1221461e079b16efc6",
                                "width": 64
                            }
                        ],
                        "name": "Keeping Me Under",
                        "release_date": "2016-03-11",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:6xyOg4RcE30zIWxXd1VRwZ"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/35RvGPQ1OxbEZknWyiaAcs"
                            },
                            "href": "https://api.spotify.com/v1/artists/35RvGPQ1OxbEZknWyiaAcs",
                            "id": "35RvGPQ1OxbEZknWyiaAcs",
                            "name": "Two Another",
                            "type": "artist",
                            "uri": "spotify:artist:35RvGPQ1OxbEZknWyiaAcs"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 218926,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "FR10S1653784"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/1PQNcWNJt5P9gSLRLA5gmT"
                    },
                    "href": "https://api.spotify.com/v1/tracks/1PQNcWNJt5P9gSLRLA5gmT",
                    "id": "1PQNcWNJt5P9gSLRLA5gmT",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Keeping Me Under",
                    "popularity": 62,
                    "preview_url": "https://p.scdn.co/mp3-preview/772c5a6c7f3f6f7ca9ed5649a30716e69fb9a6fe?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:1PQNcWNJt5P9gSLRLA5gmT"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-02-29T22:19:22Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0iOVhN3tnSvgDbcg25JoJb"
                                },
                                "href": "https://api.spotify.com/v1/artists/0iOVhN3tnSvgDbcg25JoJb",
                                "id": "0iOVhN3tnSvgDbcg25JoJb",
                                "name": "Etta James",
                                "type": "artist",
                                "uri": "spotify:artist:0iOVhN3tnSvgDbcg25JoJb"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7rd4PorIOPjPTy7qdUeeCt"
                        },
                        "href": "https://api.spotify.com/v1/albums/7rd4PorIOPjPTy7qdUeeCt",
                        "id": "7rd4PorIOPjPTy7qdUeeCt",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2737a3d3ee7f790368c0b77f56c",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e027a3d3ee7f790368c0b77f56c",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048517a3d3ee7f790368c0b77f56c",
                                "width": 64
                            }
                        ],
                        "name": "At Last!",
                        "release_date": "1960",
                        "release_date_precision": "year",
                        "total_tracks": 14,
                        "type": "album",
                        "uri": "spotify:album:7rd4PorIOPjPTy7qdUeeCt"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0iOVhN3tnSvgDbcg25JoJb"
                            },
                            "href": "https://api.spotify.com/v1/artists/0iOVhN3tnSvgDbcg25JoJb",
                            "id": "0iOVhN3tnSvgDbcg25JoJb",
                            "name": "Etta James",
                            "type": "artist",
                            "uri": "spotify:artist:0iOVhN3tnSvgDbcg25JoJb"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 187666,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USMC16048489"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2IdwQxhJn9ZE4zIotcCefR"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2IdwQxhJn9ZE4zIotcCefR",
                    "id": "2IdwQxhJn9ZE4zIotcCefR",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Stormy Weather",
                    "popularity": 58,
                    "preview_url": "https://p.scdn.co/mp3-preview/9a3c9000bb0df304b5685cbcea905fb309f4ff27?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 9,
                    "type": "track",
                    "uri": "spotify:track:2IdwQxhJn9ZE4zIotcCefR"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-03-08T19:23:01Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1gUch6pcj8OKOw6kKlWAPE"
                                },
                                "href": "https://api.spotify.com/v1/artists/1gUch6pcj8OKOw6kKlWAPE",
                                "id": "1gUch6pcj8OKOw6kKlWAPE",
                                "name": "Nico Vega",
                                "type": "artist",
                                "uri": "spotify:artist:1gUch6pcj8OKOw6kKlWAPE"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/45TSJwMh4NsAN0hMiIqyT7"
                        },
                        "href": "https://api.spotify.com/v1/albums/45TSJwMh4NsAN0hMiIqyT7",
                        "id": "45TSJwMh4NsAN0hMiIqyT7",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273c1ca268be7b19b02906c4c9f",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02c1ca268be7b19b02906c4c9f",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851c1ca268be7b19b02906c4c9f",
                                "width": 64
                            }
                        ],
                        "name": "Fury Oh Fury EP",
                        "release_date": "2013-02-05",
                        "release_date_precision": "day",
                        "total_tracks": 6,
                        "type": "album",
                        "uri": "spotify:album:45TSJwMh4NsAN0hMiIqyT7"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1gUch6pcj8OKOw6kKlWAPE"
                            },
                            "href": "https://api.spotify.com/v1/artists/1gUch6pcj8OKOw6kKlWAPE",
                            "id": "1gUch6pcj8OKOw6kKlWAPE",
                            "name": "Nico Vega",
                            "type": "artist",
                            "uri": "spotify:artist:1gUch6pcj8OKOw6kKlWAPE"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 240986,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USHWN0800613"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0GrcPg89CPjXEkPAsAooGP"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0GrcPg89CPjXEkPAsAooGP",
                    "id": "0GrcPg89CPjXEkPAsAooGP",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Beast",
                    "popularity": 49,
                    "preview_url": "https://p.scdn.co/mp3-preview/179b99692d07c8fd9024e192910166d60ef844f0?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:0GrcPg89CPjXEkPAsAooGP"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-03-19T17:50:09Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/1zuJe6b1roixEKMOtyrEak"
                                },
                                "href": "https://api.spotify.com/v1/artists/1zuJe6b1roixEKMOtyrEak",
                                "id": "1zuJe6b1roixEKMOtyrEak",
                                "name": "Tina Turner",
                                "type": "artist",
                                "uri": "spotify:artist:1zuJe6b1roixEKMOtyrEak"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/5HmYiJnUkFuciiqRrAAv4o"
                        },
                        "href": "https://api.spotify.com/v1/albums/5HmYiJnUkFuciiqRrAAv4o",
                        "id": "5HmYiJnUkFuciiqRrAAv4o",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273e9c361da971c6e81b51ef06b",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02e9c361da971c6e81b51ef06b",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851e9c361da971c6e81b51ef06b",
                                "width": 64
                            }
                        ],
                        "name": "What's Love Got to Do with It?",
                        "release_date": "1993",
                        "release_date_precision": "year",
                        "total_tracks": 12,
                        "type": "album",
                        "uri": "spotify:album:5HmYiJnUkFuciiqRrAAv4o"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1zuJe6b1roixEKMOtyrEak"
                            },
                            "href": "https://api.spotify.com/v1/artists/1zuJe6b1roixEKMOtyrEak",
                            "id": "1zuJe6b1roixEKMOtyrEak",
                            "name": "Tina Turner",
                            "type": "artist",
                            "uri": "spotify:artist:1zuJe6b1roixEKMOtyrEak"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 327400,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "GBAYE9300862"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6gJdDnF2TzfA1WPMXuCa3x"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6gJdDnF2TzfA1WPMXuCa3x",
                    "id": "6gJdDnF2TzfA1WPMXuCa3x",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Proud Mary",
                    "popularity": 66,
                    "preview_url": "https://p.scdn.co/mp3-preview/d4ac21c730f4ec3ffb6f71051ec890ed7e773b32?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 7,
                    "type": "track",
                    "uri": "spotify:track:6gJdDnF2TzfA1WPMXuCa3x"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-03-26T15:06:04Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/0iidQFemlPhkoHqFroz2my"
                                },
                                "href": "https://api.spotify.com/v1/artists/0iidQFemlPhkoHqFroz2my",
                                "id": "0iidQFemlPhkoHqFroz2my",
                                "name": "Delta Rae",
                                "type": "artist",
                                "uri": "spotify:artist:0iidQFemlPhkoHqFroz2my"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/42NjSADnDs97o75bICIqs0"
                        },
                        "href": "https://api.spotify.com/v1/albums/42NjSADnDs97o75bICIqs0",
                        "id": "42NjSADnDs97o75bICIqs0",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27349aaf14f0936159764cd728a",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0249aaf14f0936159764cd728a",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485149aaf14f0936159764cd728a",
                                "width": 64
                            }
                        ],
                        "name": "Carry The Fire",
                        "release_date": "2012-06-19",
                        "release_date_precision": "day",
                        "total_tracks": 16,
                        "type": "album",
                        "uri": "spotify:album:42NjSADnDs97o75bICIqs0"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/0iidQFemlPhkoHqFroz2my"
                            },
                            "href": "https://api.spotify.com/v1/artists/0iidQFemlPhkoHqFroz2my",
                            "id": "0iidQFemlPhkoHqFroz2my",
                            "name": "Delta Rae",
                            "type": "artist",
                            "uri": "spotify:artist:0iidQFemlPhkoHqFroz2my"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 202520,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USWB11200760"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2LzyUfJdRp3uqTrITBJXEY"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2LzyUfJdRp3uqTrITBJXEY",
                    "id": "2LzyUfJdRp3uqTrITBJXEY",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Bottom of the River",
                    "popularity": 58,
                    "preview_url": "https://p.scdn.co/mp3-preview/4f2abc57dfdd13606347a10bfbcda080bbd6afa2?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 5,
                    "type": "track",
                    "uri": "spotify:track:2LzyUfJdRp3uqTrITBJXEY"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-03-26T19:34:58Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/7LIy7KinYq7a83dUH6kvxT"
                                },
                                "href": "https://api.spotify.com/v1/artists/7LIy7KinYq7a83dUH6kvxT",
                                "id": "7LIy7KinYq7a83dUH6kvxT",
                                "name": "Zayde Wølf",
                                "type": "artist",
                                "uri": "spotify:artist:7LIy7KinYq7a83dUH6kvxT"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/3VTJLL9SL6euzyWQmORZsS"
                        },
                        "href": "https://api.spotify.com/v1/albums/3VTJLL9SL6euzyWQmORZsS",
                        "id": "3VTJLL9SL6euzyWQmORZsS",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b2734d5be51b6b043b371eb4e704",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e024d5be51b6b043b371eb4e704",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d000048514d5be51b6b043b371eb4e704",
                                "width": 64
                            }
                        ],
                        "name": "Rare Breed",
                        "release_date": "2016-04-01",
                        "release_date_precision": "day",
                        "total_tracks": 7,
                        "type": "album",
                        "uri": "spotify:album:3VTJLL9SL6euzyWQmORZsS"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7LIy7KinYq7a83dUH6kvxT"
                            },
                            "href": "https://api.spotify.com/v1/artists/7LIy7KinYq7a83dUH6kvxT",
                            "id": "7LIy7KinYq7a83dUH6kvxT",
                            "name": "Zayde Wølf",
                            "type": "artist",
                            "uri": "spotify:artist:7LIy7KinYq7a83dUH6kvxT"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 198762,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "TCACM1664368"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0Obr1fxJYUKZ52Azp1a3ct"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0Obr1fxJYUKZ52Azp1a3ct",
                    "id": "0Obr1fxJYUKZ52Azp1a3ct",
                    "is_local": false,
                    "is_playable": true,
                    "name": "New Blood",
                    "popularity": 57,
                    "preview_url": "https://p.scdn.co/mp3-preview/2bca4b9079a5d762251c41ea4eed8fe9ef0630af?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:0Obr1fxJYUKZ52Azp1a3ct"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-03-31T18:57:29Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
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
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/5cbAqQZSEgRiiNjuEHWTXc"
                        },
                        "href": "https://api.spotify.com/v1/albums/5cbAqQZSEgRiiNjuEHWTXc",
                        "id": "5cbAqQZSEgRiiNjuEHWTXc",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273e6e0891de00a924b0f186d0c",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02e6e0891de00a924b0f186d0c",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851e6e0891de00a924b0f186d0c",
                                "width": 64
                            }
                        ],
                        "name": "Moulin Rouge",
                        "release_date": "2001-09-03",
                        "release_date_precision": "day",
                        "total_tracks": 16,
                        "type": "album",
                        "uri": "spotify:album:5cbAqQZSEgRiiNjuEHWTXc"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS"
                            },
                            "href": "https://api.spotify.com/v1/artists/1l7ZsJRRS8wlW3WfJfPfNS",
                            "id": "1l7ZsJRRS8wlW3WfJfPfNS",
                            "name": "Christina Aguilera",
                            "type": "artist",
                            "uri": "spotify:artist:1l7ZsJRRS8wlW3WfJfPfNS"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5tth2a3v0sWwV1C7bApBdX"
                            },
                            "href": "https://api.spotify.com/v1/artists/5tth2a3v0sWwV1C7bApBdX",
                            "id": "5tth2a3v0sWwV1C7bApBdX",
                            "name": "Lil' Kim",
                            "type": "artist",
                            "uri": "spotify:artist:5tth2a3v0sWwV1C7bApBdX"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6lHL3ubAMgSasKjNqKb8HF"
                            },
                            "href": "https://api.spotify.com/v1/artists/6lHL3ubAMgSasKjNqKb8HF",
                            "id": "6lHL3ubAMgSasKjNqKb8HF",
                            "name": "Mýa",
                            "type": "artist",
                            "uri": "spotify:artist:6lHL3ubAMgSasKjNqKb8HF"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/1KCSPY1glIKqW2TotWuXOR"
                            },
                            "href": "https://api.spotify.com/v1/artists/1KCSPY1glIKqW2TotWuXOR",
                            "id": "1KCSPY1glIKqW2TotWuXOR",
                            "name": "P!nk",
                            "type": "artist",
                            "uri": "spotify:artist:1KCSPY1glIKqW2TotWuXOR"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 264893,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "USIR10110334"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7GbqE3MlkKosIaCvf50JRK"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7GbqE3MlkKosIaCvf50JRK",
                    "id": "7GbqE3MlkKosIaCvf50JRK",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Lady Marmalade - From \"Moulin Rouge\" Soundtrack",
                    "popularity": 69,
                    "preview_url": "https://p.scdn.co/mp3-preview/4250e94599c9c83360ae4cf848e794b54a3977f9?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 2,
                    "type": "track",
                    "uri": "spotify:track:7GbqE3MlkKosIaCvf50JRK"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-04-12T08:53:40Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6qCQcw3ZKdmAFv0v4u5ey2"
                                },
                                "href": "https://api.spotify.com/v1/artists/6qCQcw3ZKdmAFv0v4u5ey2",
                                "id": "6qCQcw3ZKdmAFv0v4u5ey2",
                                "name": "Voctave",
                                "type": "artist",
                                "uri": "spotify:artist:6qCQcw3ZKdmAFv0v4u5ey2"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/2z901ZoipEicglMUo04I8e"
                        },
                        "href": "https://api.spotify.com/v1/albums/2z901ZoipEicglMUo04I8e",
                        "id": "2z901ZoipEicglMUo04I8e",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27300676afc72be9189bbd538fd",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0200676afc72be9189bbd538fd",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485100676afc72be9189bbd538fd",
                                "width": 64
                            }
                        ],
                        "name": "The Corner of Broadway and Main Street",
                        "release_date": "2017-06-01",
                        "release_date_precision": "day",
                        "total_tracks": 14,
                        "type": "album",
                        "uri": "spotify:album:2z901ZoipEicglMUo04I8e"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6qCQcw3ZKdmAFv0v4u5ey2"
                            },
                            "href": "https://api.spotify.com/v1/artists/6qCQcw3ZKdmAFv0v4u5ey2",
                            "id": "6qCQcw3ZKdmAFv0v4u5ey2",
                            "name": "Voctave",
                            "type": "artist",
                            "uri": "spotify:artist:6qCQcw3ZKdmAFv0v4u5ey2"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/5Kcu1E5qhltjwmxpn440Jr"
                            },
                            "href": "https://api.spotify.com/v1/artists/5Kcu1E5qhltjwmxpn440Jr",
                            "id": "5Kcu1E5qhltjwmxpn440Jr",
                            "name": "Rachel Potter",
                            "type": "artist",
                            "uri": "spotify:artist:5Kcu1E5qhltjwmxpn440Jr"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 215353,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "TCADB1759108"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/2RIExFVAO1DGESqnHVg06A"
                    },
                    "href": "https://api.spotify.com/v1/tracks/2RIExFVAO1DGESqnHVg06A",
                    "id": "2RIExFVAO1DGESqnHVg06A",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Poor Unfortunate Souls / I Put a Spell on You (feat. Rachel Potter)",
                    "popularity": 43,
                    "preview_url": "https://p.scdn.co/mp3-preview/d23fc0390e61fc04714f4e9aff8b8b782720b5d8?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 11,
                    "type": "track",
                    "uri": "spotify:track:2RIExFVAO1DGESqnHVg06A"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-04-13T13:33:58Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/6xt9sJmmyYwWkJv8A6ssiU"
                                },
                                "href": "https://api.spotify.com/v1/artists/6xt9sJmmyYwWkJv8A6ssiU",
                                "id": "6xt9sJmmyYwWkJv8A6ssiU",
                                "name": "Cory Wong",
                                "type": "artist",
                                "uri": "spotify:artist:6xt9sJmmyYwWkJv8A6ssiU"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/1LL5VZdY7CBXScXB0oQ4tB"
                        },
                        "href": "https://api.spotify.com/v1/albums/1LL5VZdY7CBXScXB0oQ4tB",
                        "id": "1LL5VZdY7CBXScXB0oQ4tB",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273db23689257e028fe49d1dd0f",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02db23689257e028fe49d1dd0f",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851db23689257e028fe49d1dd0f",
                                "width": 64
                            }
                        ],
                        "name": "Elevator Music for an Elevated Mood",
                        "release_date": "2020-01-10",
                        "release_date_precision": "day",
                        "total_tracks": 11,
                        "type": "album",
                        "uri": "spotify:album:1LL5VZdY7CBXScXB0oQ4tB"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/6xt9sJmmyYwWkJv8A6ssiU"
                            },
                            "href": "https://api.spotify.com/v1/artists/6xt9sJmmyYwWkJv8A6ssiU",
                            "id": "6xt9sJmmyYwWkJv8A6ssiU",
                            "name": "Cory Wong",
                            "type": "artist",
                            "uri": "spotify:artist:6xt9sJmmyYwWkJv8A6ssiU"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7dOCnyDR2oEa1hQlvTXvdT"
                            },
                            "href": "https://api.spotify.com/v1/artists/7dOCnyDR2oEa1hQlvTXvdT",
                            "id": "7dOCnyDR2oEa1hQlvTXvdT",
                            "name": "Cody Fry",
                            "type": "artist",
                            "uri": "spotify:artist:7dOCnyDR2oEa1hQlvTXvdT"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 212933,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "QZK6P1959843"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/7wjmwD5nIYWVnHiR3X3PTO"
                    },
                    "href": "https://api.spotify.com/v1/tracks/7wjmwD5nIYWVnHiR3X3PTO",
                    "id": "7wjmwD5nIYWVnHiR3X3PTO",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Golden",
                    "popularity": 50,
                    "preview_url": "https://p.scdn.co/mp3-preview/aa2d4b3499ef987327c4e628b14aaee9fd8b71af?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:7wjmwD5nIYWVnHiR3X3PTO"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-04-13T14:29:04Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/06nevPmNVfWUXyZkccahL8"
                                },
                                "href": "https://api.spotify.com/v1/artists/06nevPmNVfWUXyZkccahL8",
                                "id": "06nevPmNVfWUXyZkccahL8",
                                "name": "Gregory Porter",
                                "type": "artist",
                                "uri": "spotify:artist:06nevPmNVfWUXyZkccahL8"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/045wnruBIjG8IPdPbJHSVh"
                        },
                        "href": "https://api.spotify.com/v1/albums/045wnruBIjG8IPdPbJHSVh",
                        "id": "045wnruBIjG8IPdPbJHSVh",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273df39b73988a9d3b66706d4e7",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02df39b73988a9d3b66706d4e7",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851df39b73988a9d3b66706d4e7",
                                "width": 64
                            }
                        ],
                        "name": "Revival",
                        "release_date": "2020-01-16",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:045wnruBIjG8IPdPbJHSVh"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/06nevPmNVfWUXyZkccahL8"
                            },
                            "href": "https://api.spotify.com/v1/artists/06nevPmNVfWUXyZkccahL8",
                            "id": "06nevPmNVfWUXyZkccahL8",
                            "name": "Gregory Porter",
                            "type": "artist",
                            "uri": "spotify:artist:06nevPmNVfWUXyZkccahL8"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 186989,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "FRUM71902256"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/0uW9gZMn6SVBSVp39umUy7"
                    },
                    "href": "https://api.spotify.com/v1/tracks/0uW9gZMn6SVBSVp39umUy7",
                    "id": "0uW9gZMn6SVBSVp39umUy7",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Revival",
                    "popularity": 63,
                    "preview_url": "https://p.scdn.co/mp3-preview/84919509c948aea8ec12d2324c8b61c675c647eb?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:0uW9gZMn6SVBSVp39umUy7"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-04-13T16:57:04Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/3LpLGlgRS1IKPPwElnpW35"
                                },
                                "href": "https://api.spotify.com/v1/artists/3LpLGlgRS1IKPPwElnpW35",
                                "id": "3LpLGlgRS1IKPPwElnpW35",
                                "name": "James Morrison",
                                "type": "artist",
                                "uri": "spotify:artist:3LpLGlgRS1IKPPwElnpW35"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/5MSaKdet5kiMdSczHYxEmg"
                        },
                        "href": "https://api.spotify.com/v1/albums/5MSaKdet5kiMdSczHYxEmg",
                        "id": "5MSaKdet5kiMdSczHYxEmg",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b273e937650c1fe13e18dac3ffe5",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e02e937650c1fe13e18dac3ffe5",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d00004851e937650c1fe13e18dac3ffe5",
                                "width": 64
                            }
                        ],
                        "name": "You're Stronger Than You Know",
                        "release_date": "2019-03-08",
                        "release_date_precision": "day",
                        "total_tracks": 12,
                        "type": "album",
                        "uri": "spotify:album:5MSaKdet5kiMdSczHYxEmg"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3LpLGlgRS1IKPPwElnpW35"
                            },
                            "href": "https://api.spotify.com/v1/artists/3LpLGlgRS1IKPPwElnpW35",
                            "id": "3LpLGlgRS1IKPPwElnpW35",
                            "name": "James Morrison",
                            "type": "artist",
                            "uri": "spotify:artist:3LpLGlgRS1IKPPwElnpW35"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/7bvcQXJHkFiN1ppIN3q4fi"
                            },
                            "href": "https://api.spotify.com/v1/artists/7bvcQXJHkFiN1ppIN3q4fi",
                            "id": "7bvcQXJHkFiN1ppIN3q4fi",
                            "name": "Joss Stone",
                            "type": "artist",
                            "uri": "spotify:artist:7bvcQXJHkFiN1ppIN3q4fi"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 216800,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "UK98N1800001"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/5M9XpS7kkTRjIge1IAz3yI"
                    },
                    "href": "https://api.spotify.com/v1/tracks/5M9XpS7kkTRjIge1IAz3yI",
                    "id": "5M9XpS7kkTRjIge1IAz3yI",
                    "is_local": false,
                    "is_playable": true,
                    "name": "My Love Goes On (feat. Joss Stone)",
                    "popularity": 49,
                    "preview_url": "https://p.scdn.co/mp3-preview/497c5c240b067274da929db6f7a5e78457dc2e86?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:5M9XpS7kkTRjIge1IAz3yI"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-04-13T17:12:29Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "single",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/2P1puQXmG48EVLBrHbum1J"
                                },
                                "href": "https://api.spotify.com/v1/artists/2P1puQXmG48EVLBrHbum1J",
                                "id": "2P1puQXmG48EVLBrHbum1J",
                                "name": "Melody Gardot",
                                "type": "artist",
                                "uri": "spotify:artist:2P1puQXmG48EVLBrHbum1J"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/7uahb24WDk2T5AXzUYooJY"
                        },
                        "href": "https://api.spotify.com/v1/albums/7uahb24WDk2T5AXzUYooJY",
                        "id": "7uahb24WDk2T5AXzUYooJY",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27355e203cbcb5bf4e0f1fd667f",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0255e203cbcb5bf4e0f1fd667f",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485155e203cbcb5bf4e0f1fd667f",
                                "width": 64
                            }
                        ],
                        "name": "Same To You (Bakermat Remix)",
                        "release_date": "2016-07-22",
                        "release_date_precision": "day",
                        "total_tracks": 1,
                        "type": "album",
                        "uri": "spotify:album:7uahb24WDk2T5AXzUYooJY"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/2P1puQXmG48EVLBrHbum1J"
                            },
                            "href": "https://api.spotify.com/v1/artists/2P1puQXmG48EVLBrHbum1J",
                            "id": "2P1puQXmG48EVLBrHbum1J",
                            "name": "Melody Gardot",
                            "type": "artist",
                            "uri": "spotify:artist:2P1puQXmG48EVLBrHbum1J"
                        },
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/3MyFDtqB80WZvbtCZRsekM"
                            },
                            "href": "https://api.spotify.com/v1/artists/3MyFDtqB80WZvbtCZRsekM",
                            "id": "3MyFDtqB80WZvbtCZRsekM",
                            "name": "Bakermat",
                            "type": "artist",
                            "uri": "spotify:artist:3MyFDtqB80WZvbtCZRsekM"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 241813,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "GBUM71600974"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/6ZWam8Kk0MILM7dG5ebeHt"
                    },
                    "href": "https://api.spotify.com/v1/tracks/6ZWam8Kk0MILM7dG5ebeHt",
                    "id": "6ZWam8Kk0MILM7dG5ebeHt",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Same To You - Bakermat Remix",
                    "popularity": 44,
                    "preview_url": "https://p.scdn.co/mp3-preview/de934a84a8d33d0818f1e89125af1dc94dadbeed?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 1,
                    "type": "track",
                    "uri": "spotify:track:6ZWam8Kk0MILM7dG5ebeHt"
                },
                "video_thumbnail": {
                    "url": null
                }
            },
            {
                "added_at": "2020-04-13T17:34:04Z",
                "added_by": {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/1127664154"
                    },
                    "href": "https://api.spotify.com/v1/users/1127664154",
                    "id": "1127664154",
                    "type": "user",
                    "uri": "spotify:user:1127664154"
                },
                "is_local": false,
                "primary_color": null,
                "track": {
                    "album": {
                        "album_type": "album",
                        "artists": [
                            {
                                "external_urls": {
                                    "spotify": "https://open.spotify.com/artist/06nevPmNVfWUXyZkccahL8"
                                },
                                "href": "https://api.spotify.com/v1/artists/06nevPmNVfWUXyZkccahL8",
                                "id": "06nevPmNVfWUXyZkccahL8",
                                "name": "Gregory Porter",
                                "type": "artist",
                                "uri": "spotify:artist:06nevPmNVfWUXyZkccahL8"
                            }
                        ],
                        "external_urls": {
                            "spotify": "https://open.spotify.com/album/2o86ajLsjwh2FWTdD9vmjj"
                        },
                        "href": "https://api.spotify.com/v1/albums/2o86ajLsjwh2FWTdD9vmjj",
                        "id": "2o86ajLsjwh2FWTdD9vmjj",
                        "images": [
                            {
                                "height": 640,
                                "url": "https://i.scdn.co/image/ab67616d0000b27310f24a19d2498497d9c47f5f",
                                "width": 640
                            },
                            {
                                "height": 300,
                                "url": "https://i.scdn.co/image/ab67616d00001e0210f24a19d2498497d9c47f5f",
                                "width": 300
                            },
                            {
                                "height": 64,
                                "url": "https://i.scdn.co/image/ab67616d0000485110f24a19d2498497d9c47f5f",
                                "width": 64
                            }
                        ],
                        "name": "Liquid Spirit (Deluxe Version)",
                        "release_date": "2013-01-01",
                        "release_date_precision": "day",
                        "total_tracks": 16,
                        "type": "album",
                        "uri": "spotify:album:2o86ajLsjwh2FWTdD9vmjj"
                    },
                    "artists": [
                        {
                            "external_urls": {
                                "spotify": "https://open.spotify.com/artist/06nevPmNVfWUXyZkccahL8"
                            },
                            "href": "https://api.spotify.com/v1/artists/06nevPmNVfWUXyZkccahL8",
                            "id": "06nevPmNVfWUXyZkccahL8",
                            "name": "Gregory Porter",
                            "type": "artist",
                            "uri": "spotify:artist:06nevPmNVfWUXyZkccahL8"
                        }
                    ],
                    "disc_number": 1,
                    "duration_ms": 222853,
                    "episode": false,
                    "explicit": false,
                    "external_ids": {
                        "isrc": "FRUM71301847"
                    },
                    "external_urls": {
                        "spotify": "https://open.spotify.com/track/43fTHnJHVzLAifZXZp8goA"
                    },
                    "href": "https://api.spotify.com/v1/tracks/43fTHnJHVzLAifZXZp8goA",
                    "id": "43fTHnJHVzLAifZXZp8goA",
                    "is_local": false,
                    "is_playable": true,
                    "name": "Musical Genocide",
                    "popularity": 41,
                    "preview_url": "https://p.scdn.co/mp3-preview/5034b81fab2358f1d78e7bd1c72dc84a519eabe3?cid=774b29d4f13844c495f206cafdad9c86",
                    "track": true,
                    "track_number": 6,
                    "type": "track",
                    "uri": "spotify:track:43fTHnJHVzLAifZXZp8goA"
                },
                "video_thumbnail": {
                    "url": null
                }
            }
        ],
        "limit": 100,
        "next": null,
        "offset": 0,
        "previous": null,
        "total": 48
    }
  ]


/* Spotify : Get all tracks from a playlist */

let infoplaylist = playslistTrack[0].items // recuperation de la liste de stracks

let playslistTrackList =[] ;
 let playlist = infoplaylist.map ((info,i)=>{ // Boucle sur le nombre de track
      let nameTrack = playslistTrack[0].items[i].track.name
      let artistName = playslistTrack[0].items[i].track.artists[0].name
      let albumName =playslistTrack[0].items[i].track.album.name
      let nbTrack = playslistTrack[0].total
      let imgPlaylist =playslistTrack[0].items[i].track.album.images[2].url 

    playslistTrackList.push({id:i,name:nameTrack,text:albumName,url:imgPlaylist})


  })  

/* Spotify : end Get All tracks from a playlist */




  /* ====> boucle avatar */
  let avatarList = listTest.map ((item,i)=>{
    return <Avatar key={i} rounded source={{uri: item.url}}size="medium" /> 
  })

  
  /*  gestion des mouvements */

  const [idDel, setIdDel]= useState() ; 
  const [ idAdd, setIdAdd] = useState() ;
  


  /* futures fonction de gestion */
  useEffect(() => {
    console.log("change",idDel);
    }, [idAdd]);

  return (
    <SafeAreaView style={styles.container}>
    <Header
        rightComponent={<Avatar
        rounded source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}}
      />}
        containerStyle={{
         backgroundColor: '#FFFFFF',
         marginBottom: 0,
         paddingBottom: 0,
         paddingTop: 0

  }}
/>
      <Text> Playlist</Text>
      {/* badge en haut de l'ecran */}
          <ScrollView style={styles.scrollView} horizontal={true}>
          <Image
        style={{width: 50, height: 50}}
        source={require('../assets/icons/add_blue.png')} />
            <View style={styles.avatar}>
              {avatarList}
            </View>
          </ScrollView>

    {/* liste des musiques */}
            <FlatList 
                data={playslistTrackList}
                keyExtractor={item => item.id}
                renderItem={({ item}) => (
                  <ListItemSwap style={styles.flatList}
                    {...item} 
                    onSwipeFromLeft={() => {alert('swiped from left!');setIdAdd(item.id)}}
                    onSwipeFromRight={() => {alert('pressed right!');setIdDel(item.id)}}
                    
                  />
                )}
                ItemSeparatorComponent={() => <Separator />}
              />

    {/*{musicList} */}
    <Track
 />
    </SafeAreaView>

  );

}

const styles = StyleSheet.create({
  container: {
    flex: hp('0.5%'),
    backgroundColor: '#fff',   
    marginVertical: 0,
    marginBottom:0,
    marginHorizontal: 0,
    paddingVertical: 0,
  },
  scrollView: {
    marginBottom:hp('1%'),
    marginHorizontal: hp('2%'),
    paddingVertical: 0,
    marginVertical: hp('6%'),
  },

  flatList: {
    marginHorizontal: 0,
    marginVertical: 0,
    paddingVertical: 0
  },
  scrollViewscrollViewMusic: {
    marginHorizontal: 0,
    width:hp('33%'),
    flex: hp('0,33%'), marginLeft: 0, marginRight: 0
  },
  avatar: {
    flex: hp('0,33%'),
    flexDirection:"row",
    padding:hp('3%'),
    marginRight:hp('3%'),
    marginVertical: 0,
    paddingVertical: 0,
    marginBottom:hp('6%'),
  },

  card: {
    flex: hp('0,33%'),
    flexDirection:"row",
    padding:hp('3%'),
    marginLeft:hp('3%'),
    marginRight:hp('3%'),
    
  },
  
});

