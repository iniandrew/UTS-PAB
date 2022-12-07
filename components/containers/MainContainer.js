import { NativeBaseProvider } from "native-base"

export const MainContainer = ({ children, style }) => {
    return (
        <NativeBaseProvider>
            {children}
        </NativeBaseProvider>
    );
};