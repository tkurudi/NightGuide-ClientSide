import React from 'react'
import { TouchableOpacity, StyleSheet, Dimensions, Text } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Svg } from 'expo';

const { G, Path, Defs, Circle, Rect } = Svg;
const { width, height } = Dimensions.get('window');

const Home = () => {
    return (
        <TouchableOpacity onPress={() => Actions.home()}>
            <Svg viewBox="0 0 130.67 130.67" height="60" width="60">
                <G >
                    <G>
                        <Rect
                            width={130.67}
                            height={130.67}
                            rx={19.01}
                            ry={19.01}
                            fill="#f3a683"
                        />
                        <Circle cx={65.33} cy={84.24} r={27.12} fill="#87c7ec" />
                        <Path

                            fill="#231f20"
                            d="M65.33 112.07a27.83 27.83 0 1 1 27.83-27.83 27.85 27.85 0 0 1-27.83 27.83zm0-54.25a26.43 26.43 0 1 0 26.43 26.42 26.45 26.45 0 0 0-26.43-26.42z"
                        />
                        <Path

                            fill="#00ccbe"
                            d="M66.11 57.16a18.49 18.49 0 0 0-.78 2.58v2.16c1.53 6.47 1.1 8.63 7.14 12.52s6 .43 10.36 6 4.75 9 3.88 10.76-2.4 1.47.37 3a9.77 9.77 0 0 1 2.31 2.47 27.07 27.07 0 0 0-23.28-39.49z"
                        />
                        <Path

                            fill="#231f20"
                            d="M89.51 98l-.82-1a8.91 8.91 0 0 0-2-2.09c-1.25-.71-1.82-1.14-1.92-1.76a1.46 1.46 0 0 1 .57-1.24 4 4 0 0 0 .71-1c.45-.93 1-3.77-3.82-10-2.32-3-3.22-3.22-4.72-3.55A14.57 14.57 0 0 1 72.09 75c-5.41-3.48-5.9-5.79-6.87-10.39-.17-.78-.35-1.62-.57-2.56v-2.46a19.15 19.15 0 0 1 .8-2.69l.18-.47h.5A27.76 27.76 0 0 1 90 97.06zm-3.21-5.06a8.16 8.16 0 0 0 1.13.73 6.85 6.85 0 0 1 1.83 1.76 26.37 26.37 0 0 0-22.67-37.55c-.33 1-.51 1.72-.56 1.93v2c.22.91.39 1.74.56 2.51 1 4.48 1.34 6.34 6.26 9.5a13.43 13.43 0 0 0 5 2.14c1.85.41 3 .8 5.53 4.06 4.85 6.3 4.83 9.73 4 11.5a5 5 0 0 1-.94 1.3z"
                        />
                        <Path

                            fill="#00ccbe"
                            d="M60.17 102c-5.62-4.74-2.38-5-4.75-8S52 88 48.3 84.24c-1.86-1.9-6.25-.09-10 1.75a27.1 27.1 0 0 0 27 25.38c.85 0 1.68-.05 2.5-.13a10.61 10.61 0 0 1 1-3.15c3.2-6.91-3.02-1.3-8.63-6.09z"
                        />
                        <Path

                            fill="#231f20"
                            d="M65.33 112.07A27.85 27.85 0 0 1 37.6 86v-.46l.42-.21c4.14-2 8.66-3.81 10.81-1.61a34.71 34.71 0 0 1 4.86 6.46A38 38 0 0 0 56 93.63a5 5 0 0 1 1.22 3c.11 1.09.21 2.12 3.43 4.84a9.53 9.53 0 0 0 6.61 2c1.33 0 2.39 0 2.91.86s.28 1.87-.71 4a10.22 10.22 0 0 0-.91 3l-.07.55h-.56c-.99.12-1.8.19-2.59.19zM39 86.41a26.46 26.46 0 0 0 26.3 24.26c.59 0 1.21 0 1.9-.08a12 12 0 0 1 .94-2.8c1-2.12.83-2.57.78-2.64s-1.09-.2-1.74-.21a10.85 10.85 0 0 1-7.5-2.36c-3.38-2.87-3.76-4.2-3.91-5.77a3.77 3.77 0 0 0-.93-2.32A39.39 39.39 0 0 1 52.47 91a33.16 33.16 0 0 0-4.68-6.22c-1.61-1.71-6.48.52-8.79 1.63z"
                        />
                        <Path

                            fill="#00ccbe"
                            d="M58.87 78.3c-3 0-4.75-.21-3.45 3.46s-.22 4.74 5.18 7.55 10.36 4.53 10.57 0S71 82 68.37 78.3s-8.64-2.71-9.07-1.3z"
                        />
                        <Path

                            fill="#231f20"
                            d="M68.46 92.8c-1.84 0-4.44-.92-8.18-2.87-4.11-2.13-4.52-3.4-4.94-5.63a13.87 13.87 0 0 0-.58-2.3c-.59-1.67-.63-2.74-.12-3.45.67-.94 2-1 3.72-.94l.28-.87c.35-1.1 2.08-1.48 2.81-1.59 2.3-.36 5.65.15 7.49 2.76 2.75 3.9 3.15 6.91 2.93 11.44a3.38 3.38 0 0 1-1.54 3 3.72 3.72 0 0 1-1.87.45zM58 79c-1 0-2 0-2.2.35s-.23.67.3 2.17a17.23 17.23 0 0 1 .62 2.48c.34 1.82.51 2.73 4.2 4.65 1.69.88 6.82 3.54 8.72 2.45a2.1 2.1 0 0 0 .84-1.86c.2-4.31-.15-7-2.68-10.58-1.62-2.28-4.57-2.3-5.43-2.25a3.78 3.78 0 0 0-2.41.72L59.38 79H58z"
                        />
                        <Path
                            fill="#fde284"
                            d="M96.94 39.5L65.33 19.43 33.73 39.5h12.79v33.11h12.34V48.02h12.95v24.59h12.34V39.5h12.79z"
                        />
                        <Path

                            fill="#231f20"
                            d="M84.85 73.31H71.11V48.72H59.56v24.59H45.82V40.2h-14.5l34-21.6 34 21.6H84.85zm-12.34-1.4h10.94V38.8h11.08l-29.2-18.54-29.2 18.54h11.09v33.11h10.94V47.32h14.35z"
                        />
                    </G>
                </G>
            </Svg>
        </TouchableOpacity >
    )
}

export default Home