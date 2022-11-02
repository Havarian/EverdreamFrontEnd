import {PageTreeItem} from "./PageTreeItem";
import * as React from "react";
import {useSelector} from "react-redux";

const TreeItemList = ({paddingLeft}, ...restProps) => {

    const {pages} = useSelector(state => state.content.inEdition.book)
    const firstPage = pages.find(page => page.parentId === null)

    return (
        <>
            <RenderItem pages={pages} paddingLeft={paddingLeft} parentPageId={null}/>
        </>
    )
}

const RenderItem = ({pages, paddingLeft, parentPageId}, ...restProps) => {
    return (
        <>
            {pages?.filter(page => page.parentPageId === parentPageId)
                ?.map(page => (
                    <>
                        <PageTreeItem key={page.id}
                                      page={page}
                                      paddingLeft={paddingLeft}>
                        </PageTreeItem>
                        <RenderItem pages={pages}
                                    parentPageId={page.id}
                                    paddingLeft={paddingLeft +20}/>
                    </>
                ))}
        </>
    )
}

export default TreeItemList