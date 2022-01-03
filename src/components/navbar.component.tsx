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
        <Center className='navbar-box' boxShadow='base'>
            <InputGroup className='search-input-box'>
                <InputLeftElement className='search-bar-symbol' children={props.fixedSymbol} />
                {props.isInvalid ?
                    <Input placeholder={props.placeholder} onChange={handleChange} onKeyPress={handleKeyPress} isInvalid errorBorderColor='crimson' /> :
                    <Input placeholder={props.placeholder} onChange={handleChange} onKeyPress={handleKeyPress} />
                }
                <InputRightElement width='6rem'>
                    {props.isSearching ?
                        <Button className='search-bar-button' isLoading leftIcon={props.buttonIcon} size='sm' colorScheme='teal' variant='solid' onClick={handleClick}>
                            {props.buttonText}
                        </Button> :
                        props.isInvalid ?
                            <Button className='search-bar-button' leftIcon={props.buttonIcon} size='sm' colorScheme='red' variant='solid' onClick={handleClick}>
                                {props.buttonText}
                            </Button> :
                            <Button className='search-bar-button' leftIcon={props.buttonIcon} size='sm' colorScheme='teal' variant='solid' onClick={handleClick}>
                                {props.buttonText}
                            </Button>
                    }
                </InputRightElement>
            </InputGroup>
        </Center>
    );
}

