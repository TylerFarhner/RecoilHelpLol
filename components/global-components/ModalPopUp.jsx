import React from 'react';
import {Modal, TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {useRecoilState} from 'recoil';
import AddFunds from '../../assets/SVG-ICON-Folder/AddFunds';
import Cross from '../../assets/SVG-ICON-Folder/Cross';
import ModalArrow from '../../assets/SVG-ICON-Folder/ModalArrow';
import PayBill from '../../assets/SVG-ICON-Folder/PayBill';
import TransferMoney from '../../assets/SVG-ICON-Folder/TransferMoney';
import Navigation from '../../navigation';
import {ModalBoolean} from '../../Recoil/atoms/UserSignUp';

const ModalPopUp = ({navigation}) => {
    const [modalVisible, setModalVisible] = useRecoilState(ModalBoolean);

    const CustomTabBarButton = () => {
        return (
            <TouchableOpacity
                onPress={() => setModalVisible(!modalVisible)}
                activeOpacity={0.8}>
                <View
                    style={{
                        width: 60,
                        height: 60,
                        borderRadius: 35,
                        backgroundColor: '#8074FD',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Cross />
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.Modal__Container}>
                <View style={styles.inner__modal__container}>
                    <View style={styles.sub__modal__containers}>
                        <View style={styles.sub__left__modal__container}>
                            <PayBill />
                            <Text style={styles.sub__text}>Pay bill</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.arrow__container}>
                                <ModalArrow />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sub__modal__containers}>
                        <View style={styles.sub__left__modal__container}>
                            <TransferMoney />
                            <Text style={styles.sub__text}>Transfer money</Text>
                        </View>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={styles.arrow__container}>
                                <ModalArrow />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sub__modal__containers}>
                        <View style={styles.sub__left__modal__container}>
                            <AddFunds />
                            <Text style={styles.sub__text}>Add funds</Text>
                        </View>
                    </View>

                    {/* The bottom part */}

                    <View style={styles.add__funds__bottom__container}>
                        {/* The individual container part */}
                        <View style={styles.add__funds__individual__container}>
                            <View style={styles.text__container}>
                                <Text style={styles.add__funds__title}>
                                    Direct deposit
                                </Text>
                                <Text style={styles.add__funds__description}>
                                    Have a portion (or all) of your paycheque
                                    automatically deposited. Just send and
                                    forget it!
                                </Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => {
                                    navigation.navigate('DirectDeposit');
                                    setModalVisible(!modalVisible);
                                }}>
                                <View style={styles.arrow__container}>
                                    <ModalArrow />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.add__funds__individual__container}>
                            <View style={styles.text__container}>
                                <Text style={styles.add__funds__title}>
                                    e-Transfer from your bank
                                </Text>
                                <Text style={styles.add__funds__description}>
                                    Securely transfer funds and get it within 30
                                    minutes
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8}>
                                <View style={styles.arrow__container}>
                                    <ModalArrow />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.add__funds__individual__container}>
                            <View style={styles.text__container}>
                                <Text style={styles.add__funds__title}>
                                    Visa Debit
                                </Text>
                                <Text style={styles.add__funds__description}>
                                    Quickly load funds from your Visa Debit card
                                </Text>
                            </View>
                            <TouchableOpacity activeOpacity={0.8}>
                                <View style={styles.arrow__container}>
                                    <ModalArrow />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.Bottom__Container__button}>
                    <CustomTabBarButton />
                </View>
            </View>
        </Modal>
    );
};

export default ModalPopUp;

const styles = StyleSheet.create({
    Modal__Container: {
        backgroundColor: 'white',
        position: 'relative',
        width: '90%',
        height: '73%',
        top: '21%',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 35,
        shadowOpacity: 0.5,
        shadowOffset: {
            height: 0,
        },
    },
    Bottom__Container__button: {
        bottom: 0,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: -35,
        borderRadius: 65,
        width: 80,
        height: 80,
        shadowOpacity: 0.05,
        shadowOffset: {
            height: 10,
        },
    },
    inner__modal__container: {
        paddingLeft: 35,
        borderRadius: 35,
    },

    sub__modal__containers: {
        marginTop: 35,
        paddingRight: 25,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    sub__left__modal__container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    sub__text: {
        marginLeft: 10,
        color: '#394168',
        fontWeight: '500',
        fontSize: 18,
    },
    arrow__container: {
        padding: 10,
        backgroundColor: '#F0F1FA',
        borderRadius: 10,
    },
    bottom__modal__container__text: {
        color: '#394168',
        fontWeight: '500',
        fontSize: 16,
    },

    add__funds__bottom__container: {
        marginTop: 15,
    },

    add__funds__individual__container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 25,
        marginBottom: 25,
        marginRight: 25,
        justifyContent: 'space-between',
    },
    add__funds__title: {
        color: '#394168',
        fontWeight: '500',
        fontSize: 16,
    },
    add__funds__description: {
        width: 250,
        marginTop: 5,
        fontWeight: '300',
        color: '#404040',
    },
    text__container: {
        width: '100%',
    },
});
