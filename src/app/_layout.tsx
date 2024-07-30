import { Slot, Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";
import { THEME } from "../styles/theme";

export default function Layout() {
    return (
        <NativeBaseProvider theme={THEME}>
            <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: "#e24f69",
                },
                headerTintColor:"#FFF"
            }}
            >
                <Stack.Screen name="home" options={{title: "Calendario"}}/>
            </Stack>
        </NativeBaseProvider>
    )
}