import '../App.css';
import { TweetComponentProps } from '../model/app.model';
import { DeleteIcon, CheckIcon } from '@chakra-ui/icons';
import { Flex, Avatar, Box, Stack, IconButton, Text } from '@chakra-ui/react';

export const TweetComponent = (props: TweetComponentProps) => {
    const handleDiscardClick = () => {
        props.onDiscardClick(props.tweet.id)
    }

    const handleAuthorizeClick = () => {
        props.onAuthorizeClick(props.tweet.id)
    }

    return (
        <Flex className='tweet-box' style={{ display: 'inline-block' }}>
            <Flex className='tweet-user-info-box'>
                <Avatar className='tweet-user-picture' src={props.tweet.imgUrl} />
                <Box className='tweet-user-name-box'>
                    <Text className='tweet-user-name'>
                        {props.tweet.name}
                    </Text>
                    <Text className='tweet-user-username'>@{props.tweet.userName}</Text>
                </Box>
                <Stack className='tweet-action-box' spacing={1} direction='row'>
                    {props.isDiscarding ? 
                    <IconButton isLoading aria-label='Descartar tweet' colorScheme='red' size='md' position='static' icon={<DeleteIcon />} onClick={handleDiscardClick} /> :
                        <IconButton aria-label='Descartar tweet' colorScheme='red' size='md' position='static' icon={<DeleteIcon />} onClick={handleDiscardClick} />}
                    {props.isAuthorizing ? 
                    <IconButton isLoading aria-label='Aprovar tweet' colorScheme='green' size='md' position='static' icon={<CheckIcon />} onClick={handleAuthorizeClick} /> :
                        <IconButton aria-label='Aprovar tweet' colorScheme='green' size='md' position='static' icon={<CheckIcon />} onClick={handleAuthorizeClick} />}
                </Stack>
            </Flex>
            <Box className='tweet-text-box'>
                <Text className='tweet-text'>{props.tweet.text}</Text>
            </Box>
        </Flex>
    );
}