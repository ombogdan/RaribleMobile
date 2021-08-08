import React, {PureComponent, Component} from 'react';
import {Animated} from 'react-native';
import {State, TapGestureHandler, PanGestureHandler} from 'react-native-gesture-handler';
import size from '../lib/size';

export default function Touch(Class) {
    class Touchable extends Component {
        onState = ({nativeEvent: e}) => {
            var {onPress} = this.props;

            if (e.state === State.ACTIVE && onPress) {
                onPress(e);
            }
        };

        render() {
            return (
                <TapGestureHandler onHandlerStateChange={this.onState}>
                    <Class {...this.props}/>
                </TapGestureHandler>
            );
        }
    }

    return Touchable;
}

export function Swipe(Class) {
    Class = Animated.createAnimatedComponent(Class);

    class Swipeable extends PureComponent {
        constructor(props) {
            super();

            var {animatedLeft, animatedOpacity} = props;

            this.state = {
                left: animatedLeft || new Animated.Value(0),
                opacity: animatedOpacity || new Animated.Value(1),
            };

            this.eventLeftHandler = Animated.event([{nativeEvent: {translationX: this.state.left}}]);
        }

        onState = ({nativeEvent: e}) => {
            if (e.state !== State.END) return;

            var {swipeLeft, swipeRight, swipeLeftOut, swipeRightOut, onPress} = this.props;

            var screenWidth = size.width;
            var dx = e.translationX;

            if (dx > 100) {
                if (swipeRight) {
                    swipeRight();

                    Animated.spring(this.state.left, {
                        toValue: 0,
                        bounciness: 10
                    }).start();
                }
                else if (swipeRightOut) {
                    Animated.timing(this.state.left, {
                        toValue: screenWidth,
                        duration: 200
                    }).start();

                    Animated.timing(this.state.opacity, {
                        toValue: 0,
                        duration: 200
                    }).start(swipeRightOut);
                }
            }
            else if (dx < -100) {
                if (swipeLeft) {
                    swipeLeft();

                    Animated.spring(this.state.left, {
                        toValue: 0,
                        bounciness: 10
                    }).start();
                }
                else if (swipeLeftOut) {
                    Animated.timing(this.state.left, {
                        toValue: -screenWidth,
                        duration: 200
                    }).start();

                    Animated.timing(this.state.opacity, {
                        toValue: 0,
                        duration: 200
                    }).start(swipeLeftOut);
                }
            }
            else {
                Animated.spring(this.state.left, {
                    toValue: 0,
                    bounciness: 10
                }).start();
            }
        };

        render() {
            var {left, opacity} = this.state;
            var {style, animated, ...props} = this.props;

            return (
                <PanGestureHandler onHandlerStateChange={this.onState} onGestureEvent={this.eventLeftHandler}>
                    <Class {...props} style={[style, animated === false ? null : {left, opacity}]}/>
                </PanGestureHandler>
            );
        }
    }

    return Swipeable;
}