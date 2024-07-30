import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
    return (
        <NativeBaseInput
            bg="primary.300"
            h={14}
            px={4}
            borderColor="primary.100"
            fontSize="md"
            fontFamily="body"
            color="white"
            placeholderTextColor="primary.400"
            _focus={{
                bg: "primary.400",
                borderColor: "primary.100"
            }}
            {...rest}
        />
    );
}