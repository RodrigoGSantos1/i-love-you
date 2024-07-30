import { Link, Redirect, useRouter } from "expo-router";
import { Box, Center, Image, KeyboardAvoidingView, Text } from "native-base";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import Switch from "../components/Switch";

export default function index() {
    const router = useRouter();

    return (
        <KeyboardAvoidingView flex={1} bg="primary.500" justifyContent="center" alignItems="center" behavior="padding" enabled>

            <Image source={require('../../assets/Logo.png')} alt="Logo" size="lg" mb={10} />
            <Box>
                <Text
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                    mb={2}
                >E-mail ou nome de usuário</Text>
                <Input
                    w="80%"
                    mb={1}
                    placeholder="E-mail ou nome de usuário"
                    keyboardType="email-address"
                />
            </Box>
            <Box>
                <Text
                    color="white"
                    fontSize="sm"
                    fontWeight="bold"
                    mb={2}
                >Senha</Text>
                <Input
                    w="80%"
                    mb={3}
                    placeholder="Senha"
                />
            </Box>
            <Switch title="Lembrar de mim" width="80%" mb={5} />
            <Button
                title="Entrar"
                width="80%"
                mb={5}
                onPress={() => {
                    router.replace('/home');
                }}
            />
            <Text
                underline
                color="white"
                fontSize="sm"
                fontWeight="bold"
                mb={5}
            >
                Esqueceu sua senha?
            </Text>
            <Button title="Cadastrar" type="SECONDARY" width={"80%"} />
        </KeyboardAvoidingView>
    )
}