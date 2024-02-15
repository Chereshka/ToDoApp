export type TTask =
    {
        _id: string,
        title: string,
        text: string,
        important?: boolean,
        opened: Date,
        closed?: boolean
    }

export type TTaskNew =
    {
        
        title: string,
        text: string,
        important?: boolean
    }
