import styled from 'styled-components'

export const Wrapper =styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TodoContainer = styled.div`
    margin: auto;
    width: 330px;
    margin: 20px;
    padding: 8px;
    border-bottom: solid 3px goldenrod;
`

export const TodoTitel = styled.p`
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 5px;
`

export const EachTodoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 300px;
    padding-top: 5px;
    padding-bottom: 5px;
`

export const List = styled.li`
    list-style-type: none;
`

export const TodoText = styled.p`
    font-size: 14px;
    margin: 0 12px 0 12px;
`