import {PageTreeItem} from "./PageTreeItem";
import * as React from "react";
import {useSelector} from "react-redux";

const TreeItemList = ({paddingLeft}, ...restProps) => {

    const {pages} = useSelector(state => state.content.inEdition.book)
    const firstPage = pages.find(page => page.parentId === null)

    return (
        <>
            {}
            {/*{page && <PageTreeItem page={page} paddingLeft={paddingLeft}/>}*/}
            {/*<RenderTree page={page?.nextPage} parentPageNo={page?.parentPageNo} paddingLeft={paddingLeft + 20}/>*/}
        </>
    )
}

const RenderTree = ({page, paddingLeft, parentPageNo}, ...restProps) => {
    return (
        <>
            {/*{page?.map(item => (*/}
            {/*    <>*/}
            {/*        <PageTreeItem key={item.id}*/}
            {/*                      parentPageNo={parentPageNo}*/}
            {/*                      page={item}*/}
            {/*                      paddingLeft={paddingLeft}/>*/}

            {/*        {item.nextPage && <RenderTree*/}
            {/*            page={item.nextPage}*/}
            {/*            parentPageNo={item.pageNo}*/}
            {/*            paddingLeft={paddingLeft +20}/>}*/}
            {/*    </>*/}
            {/*))}*/}
        </>
    )
}

export default TreeItemList