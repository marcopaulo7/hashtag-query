export interface MainProps {
 }

export interface NavbarProps {
    placeholder: string
    fixedSymbol: string
    buttonText: string
    buttonIcon: React.ReactElement<any, string | React.JSXElementConstructor<any>>
    onSearchClick: Function
    isSearching: boolean
    isInvalid: boolean
}

export interface MainState {
    tweets: { [x: string]: Tweet }
    isLoading: boolean
    invalidSearch: boolean
}

export interface NavbarState {
    hashtag: string
}

export interface TweetComponentProps {
    tweet: Tweet,
    onAuthorizeClick: Function
    onDiscardClick: Function
    isAuthorizing: boolean
    isDiscarding: boolean
}

export interface Tweet {
    id: string;
    userId: string;
    name: string,
    userName: string;
    text: string
    imgUrl: string
}

export interface RequestResponse {
    data: { [x: string]: Tweet; }
}