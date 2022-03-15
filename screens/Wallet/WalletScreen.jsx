import React, {useState} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Animated,
} from 'react-native';
import {useRecoilValue} from 'recoil';
import BullDog from '../../assets/SVG-ICON-Folder/BullDog';
import Carolina from '../../assets/SVG-ICON-Folder/Carolina';
import HidePrice from '../../assets/SVG-ICON-Folder/HidePrice';
import MediaMarkt from '../../assets/SVG-ICON-Folder/MediaMarkt';
import ToniPizza from '../../assets/SVG-ICON-Folder/ToniPizza';
import ViewPrice from '../../assets/SVG-ICON-Folder/ViewPrice';
import ModalPopUp from '../../components/global-components/ModalPopUp';
import {ModalBoolean} from '../../Recoil/atoms/UserSignUp';

const Item = ({id, ShopName, PurchaseDate, Price}) => (
    <View
        style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            paddingRight: 40,
            marginTop: 20,
        }}
        key={id}>
        <View style={{flexDirection: 'row'}}>
            <View style={{marginRight: 20}}>
                <BullDog />
            </View>
            <View>
                <Text
                    style={{
                        color: '#404040',
                        fontWeight: 'bold',
                        fontSize: 16,
                    }}>
                    {ShopName}
                </Text>
                <Text style={{color: '#404040', fontSize: 14, marginTop: 5}}>
                    {PurchaseDate}
                </Text>
            </View>
        </View>
        <View>
            <Text
                style={{
                    color: '#404040',
                    fontSize: 14,
                    fontWeight: 'bold',
                }}>
                {Price}
            </Text>
        </View>
    </View>
);

const WalletScreen = ({navigation}) => {
    const Transactions = [
        {
            id: 1,
            ShopName: 'Bulldog Brewery',
            PurchaseDate: '20 Apr',
            Price: '- CA$ 18.99',
            Icon: <BullDog />,
        },
        {
            id: 2,
            ShopName: 'Carolina Teixeira',
            PurchaseDate: '20 Apr',
            Price: ' CA$ 18.99',
            Icon: <Carolina />,
        },
        {
            id: 3,
            ShopName: 'Toni’s Pizza',
            PurchaseDate: '20 Apr',
            Price: '- CA$ 18.99',
            Icon: <ToniPizza />,
        },
        {
            id: 4,
            ShopName: 'MediaMarkt',
            PurchaseDate: '20 Apr',
            Price: '- CA$ 18.99',
            Icon: <MediaMarkt />,
        },
        // {
        //     id: 5,
        //     ShopName: 'Toni’s Pizza',
        //     PurchaseDate: '20 Apr',
        //     Price: '- CA$ 18.99',
        // },
        // {
        //     id: 6,
        //     ShopName: 'Carolina Teixeira',
        //     PurchaseDate: '20 Apr',
        //     Price: ' CA$ 18.99',
        // },
        // {
        //     id: 7,
        //     ShopName: 'Carolina Teixeira',
        //     PurchaseDate: '20 Apr',
        //     Price: ' CA$ 18.99',
        // },
        // {
        //     id: 8,
        //     ShopName: 'Carolina Teixeira',
        //     PurchaseDate: '20 Apr',
        //     Price: ' CA$ 18.99',
        // },
        // {
        //     id: 9,
        //     ShopName: 'Carolina Teixeira',
        //     PurchaseDate: '20 Apr',
        //     Price: ' CA$ 18.99',
        // },
        // {
        //     id: 10,
        //     ShopName: 'Toni’s Pizza',
        //     PurchaseDate: '20 Apr',
        //     Price: ' CA$ 18.99',
        // },
    ];
    const [showPrice, setShowPrice] = useState(false);
    const [animation, setAnimation] = useState(new Animated.Value(0));
    const ModalBool = useRecoilValue(ModalBoolean);

    const color = animation.interpolate({
        inputRange: [0, 0.2, 1.8, 2],
        outputRange: [
            'rgba(213, 213, 213, 0.9910576)',
            'rgba(213, 213, 213, 0.0910576)',
            'rgba(213, 213, 213, 0.0910576)',
            'rgba(213, 213, 213, 0.0910576)',
        ],
    });

    const BackGroundColor = {
        backgroundColor: color,
    };

    return (
        <View style={styles.walletContainer}>
            <ModalPopUp navigation={navigation} />

            <Animated.View
                style={[
                    styles.wallet__top__container,
                    ModalBool ? BackGroundColor : null,
                ]}>
                <View style={styles.priceContainer}>
                    <Text style={styles.wallet__price} numberOfLines={1}>
                        {showPrice ? '' : 'CA$ 2,564,45.30'}
                    </Text>
                    <Text
                        style={{
                            color: 'white',
                            fontWeight: '300',
                            fontSize: 14,
                        }}>
                        Current Balance
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => setShowPrice(!showPrice)}
                        activeOpacity={0.8}>
                        {showPrice ? <ViewPrice /> : <HidePrice />}
                    </TouchableOpacity>
                </View>
                <View style={styles.user__initials__container}>
                    <Text style={styles.user__initials}>CY</Text>
                </View>
            </Animated.View>
            <View style={styles.wallet__bottom__container}>
                <Text style={styles.text__transactions}>
                    Recent transactions
                </Text>
                {/* <View style={styles.filter__container}>
          <View style={styles.filter__text__container}>
            <Text style={styles.filter__text}>All</Text>
          </View>

          <View style={styles.filter__text__container}>
            <Text style={styles.filter__text}>Income</Text>
          </View>

          <View style={styles.filter__text__container}>
            <Text style={styles.filter__text}>Expense</Text>
          </View>
        </View> */}
                <View style={{height: '80%'}}>
                    <ScrollView>
                        <View style={styles.transaction__container__wrapper}>
                            <Text style={styles.today__transaction__title}>
                                Today
                            </Text>
                        </View>
                        {Transactions.map(
                            ({id, ShopName, PurchaseDate, Price, Icon}) => (
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        width: '100%',
                                        justifyContent: 'space-between',
                                        paddingRight: 40,
                                        marginTop: 20,
                                    }}
                                    key={id}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View style={{marginRight: 20}}>
                                            {Icon ? Icon : <BullDog />}
                                        </View>
                                        <View>
                                            <Text
                                                style={{
                                                    color: '#404040',
                                                    fontWeight: 'bold',
                                                    fontSize: 14,
                                                }}>
                                                {ShopName}
                                            </Text>
                                            <Text
                                                style={{
                                                    color: '#404040',
                                                    fontSize: 14,
                                                    marginTop: 5,
                                                }}>
                                                {PurchaseDate}
                                            </Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text
                                            style={{
                                                color: '#404040',
                                                fontSize: 14,
                                                fontWeight: 'bold',
                                            }}>
                                            {Price}
                                        </Text>
                                    </View>
                                </View>
                            ),
                        )}
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default WalletScreen;

const styles = StyleSheet.create({
    walletContainer: {
        flex: 1,
        height: '50%',
        width: '100%',
    },
    wallet__top__container: {
        flex: 0.3,
        backgroundColor: '#131936',
        alignItems: 'center',
        height: 150,
        paddingLeft: 20,
        flexDirection: 'row',
    },
    wallet__price: {
        fontSize: 32,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 10,
        flex: 0.2,
        marginBottom: 5,
    },
    priceContainer: {
        flex: 0.85,
    },
    user__initials__container: {
        backgroundColor: '#8074FD',
        marginLeft: 'auto',
        borderRadius: 50,
        marginRight: 20,
    },
    user__initials: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 'auto',
        padding: 10,
    },
    wallet__bottom__container: {
        flex: 1,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white',
        marginTop: -30,
        paddingLeft: 20,
        paddingTop: 40,
    },
    text__transactions: {
        fontSize: 20,
        color: '#394168',
        fontWeight: '500',
        paddingBottom: 10,
    },
    filter__container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 40,
        marginRight: 20,
    },
    filter__text__container: {
        backgroundColor: '#F0F1FA',
        borderRadius: 20,
        paddingLeft: 40,
        paddingRight: 40,
        paddingBottom: 10,
        paddingTop: 10,
    },
    filter__text: {
        color: '#394168',
        fontWeight: '500',
    },
    transaction__container__wrapper: {
        marginTop: 20,
        marginBottom: 20,
    },
    today__transaction__title: {
        color: '#394168',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
