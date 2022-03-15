import React, {useState} from 'react';
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Dimensions,
} from 'react-native';
import Button from '../../components/global-components/Button';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import {useRecoilValue} from 'recoil';
import {UserInfo} from '../../Recoil/atoms/UserSignUp';

const top = Dimensions.get('window').height / 2.1;
const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const CreateAccountWalletScreen = ({navigation}) => {
    const name = useRecoilValue(UserInfo);

    const [showModal, setShowModal] = useState(false);

    const context = useSharedValue({y: 0});
    const translateY = useSharedValue(0);

    // This animation takes care of the slide up and down of the bottom container.
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = {y: translateY.value};
        })
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, -300);
            translateY.value = Math.min(translateY.value, 0);
        })
        .onEnd(() => {
            if (translateY.value < -120) {
                translateY.value = withSpring(-SCREEN_HEIGHT / 3, {
                    damping: 50,
                });
            } else if (translateY.value > -120) {
                translateY.value = withSpring(-SCREEN_HEIGHT / 89, {
                    damping: 50,
                });
            }
        });

    //This useEffect runs immidiately when the page loads and allows the container to slide upward to a height of -SCREEN_HEIGHT / 89
    // Change the context value to 400
    // useEffect(() => {
    //   translateY.value = withSpring(-SCREEN_HEIGHT / 199, { damping: 50 });
    // }, []);

    // These two functions is when the user clicks "More info" and "Hide Info"
    const ShowModal = () => {
        setShowModal(!showModal);
        translateY.value = withSpring(-SCREEN_HEIGHT / 3, {damping: 50});
    };

    // These two functions is when the user clicks "More info" and "Hide Info"

    const HideModal = () => {
        setShowModal(!showModal);
        translateY.value = withSpring(-SCREEN_HEIGHT / 99, {damping: 50});
    };

    // This bottom function is the translateY style given to the inner__bottom__container

    const rBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY.value}],
        };
    });

    return (
        <View style={styles.Home__Container}>
            <View style={styles.inner__container}>
                <View style={styles.inner__top__container}>
                    <View style={styles.top__intro}>
                        <View style={styles.welcome__container}>
                            <Text style={styles.welcome}>
                                Welcome, {name.firstName}!
                            </Text>
                            <View style={styles.user__initials__container}>
                                <Text style={styles.user__initials}>
                                    {name?.firstName[0]}
                                    {name?.lastName[0]}
                                </Text>
                            </View>
                        </View>
                        <View style={styles.Text__Card__Container}>
                            <Text style={styles.account__package__text}>
                                Choose your account package
                            </Text>
                            <View style={styles.account__card}>
                                <Text style={styles.text__account__card}>
                                    Image prepaid card
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
                <GestureDetector>
                    <Animated.View
                        style={[
                            styles.inner__bottom__container,
                            rBottomSheetStyle,
                        ]}>
                        <SafeAreaView>
                            <View
                                style={
                                    styles.inner__bottom__container__content
                                }>
                                <Text style={styles.package__title}>
                                    Basic Package
                                </Text>

                                <Text style={styles.package__text}>
                                    No annual fees Earn avg. 4% cashback from
                                    Hutsy partners Earn more with a rewards plan
                                </Text>
                            </View>
                            {showModal && (
                                <ScrollView>
                                    <Text style={styles.more__info__modal}>
                                        Where does it come from? Contrary to
                                        popular belief, Lorem Ipsum is not
                                        simply random text. It has roots in a
                                        piece of classical Latin literature from
                                        45 BC, making it over 2000 years old.
                                        Richard McClintock, a Latin professor at
                                        Hampden-Sydney College in Virginia,
                                        looked up one of the more obscure Latin
                                        words, consectetur, from a Lorem Ipsum
                                        passage, and going through the cites of
                                        the word in classical literature,
                                        discovered the undoubtable source. Lorem
                                        Ipsum comes from sections 1.10.32 and
                                        1.10.33 of "de Finibus Bonorum et
                                        Malorum" (The Extremes of Good and Evil)
                                        by Cicero, written in 45 BC. This book
                                        is a treatise on the theory of ethics,
                                        very popular during the Renaissance. The
                                        first line of Lorem Ipsum, "Lorem ipsum
                                        dolor sit amet..", comes from a line in
                                        section 1.10.32. Where does it come
                                        from? Contrary to popular belief, Lorem
                                        Ipsum is not simply random text. It has
                                        roots in a piece of classical Latin
                                        literature from 45 BC, making it over
                                        2000 years old. Richard McClintock, a
                                        Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of
                                        the more obscure Latin words,
                                        consectetur, from a Lorem Ipsum passage,
                                        and going through the cites of the word
                                        in classical literature, discovered the
                                        undoubtable source. Lorem Ipsum comes
                                        from sections 1.10.32 and 1.10.33 of "de
                                        Finibus Bonorum et Malorum" (The
                                        Extremes of Good and Evil) by Cicero,
                                        written in 45 BC. This book is a
                                        treatise on the theory of ethics, very
                                        popular during the Renaissance. The
                                        first line of Lorem Ipsum, "Lorem ipsum
                                        dolor sit amet..", comes from a line in
                                        section 1.10.32. Where does it come
                                        from? Contrary to popular belief, Lorem
                                        Ipsum is not simply random text. It has
                                        roots in a piece of classical Latin
                                        literature from 45 BC, making it over
                                        2000 years old. Richard McClintock, a
                                        Latin professor at Hampden-Sydney
                                        College in Virginia, looked up one of
                                        the more obscure Latin words,
                                        consectetur, from a Lorem Ipsum passage,
                                        and going through the cites of the word
                                        in classical literature, discovered the
                                        undoubtable source. Lorem Ipsum comes
                                        from sections 1.10.32 and 1.10.33 of "de
                                        Finibus Bonorum et Malorum" (The
                                        Extremes of Good and Evil) by Cicero,
                                        written in 45 BC. This book is a
                                        treatise on the theory of ethics, very
                                        popular during the Renaissance. The
                                        first line of Lorem Ipsum, "Lorem ipsum
                                        dolor sit amet..", comes from a line in
                                        section 1.10.32. Latin professor at
                                        Hampden-Sydney College in Virginia,
                                        looked up one of the more obscure Latin
                                        words, consectetur, from a Lorem Ipsum
                                        passage, and going through the cites of
                                        the word in classical literature,
                                        discovered the undoubtable source. Lorem
                                        Ipsum comes from sections 1.10.32 and
                                        1.10.33 of "de Finibus Bonorum et
                                        Malorum" (The Extremes of Good and Evil)
                                        by Cicero, written in 45 BC. This book
                                        is a treatise on the theory of ethics,
                                        very popular during the Renaissance. The
                                        first line of Lorem Ipsum, "Lorem ipsum
                                        dolor sit amet..", comes from a line in
                                        section 1.10.32. Latin professor at
                                        Hampden-Sydney College in Virginia,
                                        looked up one of the more obscure Latin
                                        words, consectetur, from a Lorem Ipsum
                                        passage, and going through the cites of
                                        the word in classical literature,
                                        discovered the undoubtable source. Lorem
                                        Ipsum comes from sections 1.10.32 and
                                        1.10.33 of "de Finibus Bonorum et
                                        Malorum" (The Extremes of Good and Evil)
                                        by Cicero, written in 45 BC. This book
                                        is a treatise on the theory of ethics,
                                        very popular during the Renaissance. The
                                        first line of Lorem Ipsum, "Lorem ipsum
                                        dolor sit amet..", comes from a line in
                                        section 1.10.32.
                                    </Text>
                                </ScrollView>
                            )}

                            <Button
                                title="Hire basic Package"
                                onClick={() => {
                                    navigation.navigate('TermsAndCondition');
                                }}
                            />
                            {!showModal ? (
                                <Text
                                    style={styles.more__info__button}
                                    onPress={ShowModal}>
                                    More Info
                                </Text>
                            ) : (
                                <Text
                                    style={styles.more__info__button}
                                    onPress={HideModal}>
                                    Hide Info
                                </Text>
                            )}
                        </SafeAreaView>
                    </Animated.View>
                </GestureDetector>
            </View>
        </View>
    );
};

export default CreateAccountWalletScreen;

const styles = StyleSheet.create({
    Home__Container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inner__container: {
        width: '100%',
        height: '100%',
    },
    inner__top__container: {
        flex: 0.5,
        width: '100%',
        backgroundColor: '#131936',
        alignItems: 'center',
    },

    inner__bottom__container: {
        position: 'absolute',
        top: top,
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        height: '100%',
    },

    inner__bottom__container__content: {
        width: '100%',
        alignItems: 'center',
    },
    package__title: {
        fontSize: 20,
        color: '#394168',
        fontWeight: '500',
        marginTop: 50,
    },
    package__text: {
        width: '80%',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20,
        fontSize: 18,
        color: '#404040',
        fontWeight: '300',
    },
    more__info__modal: {
        color: '#404040',
        fontSize: 16,
        fontWeight: '300',
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 300,
    },
    more__info__button: {
        textAlign: 'center',
        marginTop: 20,
        color: '#3DAEEE',
        fontSize: 14,
        fontWeight: '400',
    },
    top__intro: {
        position: 'absolute',
        top: 30,
        width: '100%',
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 20,
        height: '100%',
    },
    welcome__container: {
        flexDirection: 'row',
        width: '100%',
    },
    welcome: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
        marginRight: 10,
        marginBottom: 5,
    },
    user__initials__container: {
        backgroundColor: '#8074FD',
        marginLeft: 'auto',
        borderRadius: 30,
    },
    user__initials: {
        color: 'white',
        fontWeight: '500',
        fontSize: 16,
        marginLeft: 'auto',
        padding: 12,
        paddingTop: 13,
        paddingBottom: 13,
    },
    Text__Card__Container: {
        width: '100%',
        marginTop: 40,
        height: '100%',
    },
    account__package__text: {
        color: 'white',
        fontSize: 18,
        fontWeight: '400',
        marginBottom: 20,
    },
    account__card: {
        width: '100%',
        backgroundColor: '#52506A',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        height: '45%',
    },
    text__account__card: {
        color: '#EFEFF4',
    },
});
