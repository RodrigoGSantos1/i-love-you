import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

interface Props extends IButtonProps {
    title: string;
    type?: 'PRIMARY' | 'SECONDARY';
}

export function Button({ title, type = 'PRIMARY', width = 'full', ...rest }: Props) {
    return (
        <ButtonNativeBase
            w={width}
            h={14}
            rounded="full"
            fontSize="md"
            textTransform="uppercase"
            bg={type === 'SECONDARY' ? "primary.300" : "primary.100"}
            borderColor={type === 'SECONDARY' ? "primary.100" : "primary.100"}
            shadow="2"
            _pressed={{
                bg: type === 'SECONDARY' ? "primary.300" : "primary.100"
            }}
            _loading={{
                _spinner: { color: "white" }
            }}
            {...rest}
        >
            <Text
                fontSize="sm"
                fontFamily="heading"
                color={type === 'SECONDARY' ? 'white' : "white"}
                fontWeight="bold"
            >
                {title}
            </Text>
        </ButtonNativeBase >
    );
}