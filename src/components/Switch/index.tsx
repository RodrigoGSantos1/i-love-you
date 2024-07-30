import { Switch, Box, Text, ISwitchProps } from "native-base";


interface ISwitchCustom extends ISwitchProps {
    title: string;
}

export default function SwitchCustom({ title, width = "full", ...rest }: ISwitchCustom) {
    return (
        <Box display="flex" flexDirection="row" alignItems="start" w={width}>
            <Switch
                bg="amber.900"
                size="sm"
                offTrackColor="gray.100"
                onTrackColor="primary.100"
                {...rest}
            />
            <Text
                color="white"
                fontSize="sm"
                fontWeight="bold"
                mt={1}
            >{title}</Text>
        </Box>
    )
}