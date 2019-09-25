import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
    padding: 1px;
`;

export const Code = styled.View`
    background: #FFF;
    width: 100px;
    height: 100px;
    overflow: hidden;
    padding: 10px;
    align-self: center;
`;

export const Nav = styled.View`
    width: 100%;
    padding: 1px;
    margin-top: 30px;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: rgba(255, 255, 255, 0.8);
`;

export const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: rgba(255, 255, 255, 0.8);
`;

export const NavText = styled.Text`
    font-size: 15px;
    color: #fff;
    margin-left: 20px;
`;

export const SignOutButton = styled.TouchableOpacity`
    border-width: ${StyleSheet.hairlineWidth}px;
    border-color: rgba(255, 255, 255, 0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
    width: 100%;
`;

export const SingOutButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 13px;
`;