import { TweetComponentProps } from "../model/app.model";
import { DeleteIcon, CheckIcon } from "@chakra-ui/icons";
import { Flex, Avatar, Box, Stack, IconButton, Text } from "@chakra-ui/react";

export const TweetComponent = (props: TweetComponentProps) => {
    const handleDiscardClick = () => {
        props.onDiscardClick(props.tweet.id)
    }

    const handleAuthorizeClick = () => {
        props.onAuthorizeClick(props.tweet.id)
    }

    return (
        <Flex borderWidth='1px' minW='100%' borderRadius='lg' style={{ display: 'inline-block' }}>
            <Flex m='3'>
                <Avatar src={props.tweet.imgUrl} position="static" />
                <Box ml='3'>
                    <Text fontWeight='bold'>
                        {props.tweet.name}
                    </Text>
                    <Text fontSize='sm'>@{props.tweet.userName}</Text>
                </Box>
                <Stack spacing={1} ml="auto" mr="0" direction='row' float='right'>
                    {props.isDiscarding ? <IconButton isLoading aria-label='Descartar tweet' colorScheme='red' size='md' position="static" isLoad icon={<DeleteIcon />} onClick={handleDiscardClick} /> :
                        <IconButton aria-label='Descartar tweet' colorScheme='red' size='md' position="static" icon={<DeleteIcon />} onClick={handleDiscardClick} />}
                    {props.isAuthorizing ? <IconButton isLoading aria-label='Aprovar tweet' colorScheme='green' size='md' position="static" icon={<CheckIcon />} onClick={handleAuthorizeClick} /> :
                        <IconButton aria-label='Aprovar tweet' colorScheme='green' size='md' position="static" icon={<CheckIcon />} onClick={handleAuthorizeClick} />}
                </Stack>
            </Flex>
            <Box m='3'>
                <Text fontSize='md'>{props.tweet.text}</Text>
            </Box>
        </Flex>
    );
}