import React, { useState } from 'react';
import { Center, InputGroup, InputLeftElement, Input, InputRightElement, Button } from '@chakra-ui/react';
import { NavbarProps } from '../model/app.model'

export const Navbar = (props: NavbarProps) => {
    const [hashtag, setHashtag] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setHashtag(e.target.value)
    }

    const handleClick = () => props.onSearchClick(hashtag)

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
            props.onSearchClick(hashtag)
    }
    
    return (
        <Center position="fixed" w="100%" h="7%" backgroundColor="WhiteSmoke">
            <InputGroup w="70%">
                <InputLeftElement pointerEvents='none' color='gray' fontSize='1.2em' children={props.fixedSymbol} />
                {props.isInvalid ?
                    <Input placeholder={props.placeholder} onChange={handleChange} onKeyPress={handleKeyPress} isInvalid errorBorderColor='crimson' /> :
                    <Input placeholder={props.placeholder} onChange={handleChange} onKeyPress={handleKeyPress} />
                }
                <InputRightElement width='6rem'>
                    {props.isSearching ?
                        <Button isLoading leftIcon={props.buttonIcon} h='2rem' size='sm' colorScheme='teal' variant='solid' onClick={handleClick}>
                            {props.buttonText}
                        </Button> :
                        props.isInvalid ?
                            <Button leftIcon={props.buttonIcon} h='2rem' size='sm' colorScheme='red' variant='solid' onClick={handleClick}>
                                {props.buttonText}
                            </Button> :
                            <Button leftIcon={props.buttonIcon} h='2rem' size='sm' colorScheme='teal' variant='solid' onClick={handleClick}>
                                {props.buttonText}
                            </Button>
                    }
                </InputRightElement>
            </InputGroup>
        </Center>
    );
}

