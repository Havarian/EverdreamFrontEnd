import * as React from 'react';
import {PageTreeRoot} from "./PageTreeItem";
import {PageTreeContainer} from "./styles";
import {useSelector} from "react-redux";
import TreeItemList from "./TreeItemList";


export default function PageTree() {

    const {title} = useSelector(state => state.content.inEdition.book)

    return (
        <PageTreeContainer>
            <PageTreeRoot title={title}/>
            <TreeItemList paddingLeft={20}/>
        </PageTreeContainer>

    )
}