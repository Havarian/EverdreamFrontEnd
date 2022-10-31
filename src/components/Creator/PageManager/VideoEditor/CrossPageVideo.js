import styled from "styled-components/macro"
import Grid from "@mui/material/Grid";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
`

const ChoicesContainer = styled.div`
`

const Top = styled.div`

`

const Left = styled.div`

`

const Right = styled.div`

`

const CrossPageVideo = () => {
    return (
        <Wrapper>
            <ChoicesContainer>
                <Grid container>
                    <Grid item lg={12} xl={12} sm={12} xs={12}>
                        <Top></Top>
                    </Grid>
                </Grid>
                <Grid container spading={2}>
                    <Grid item lg={6} xl={6} sm={6} xs={6}>
                        <Left></Left>
                    </Grid>
                    <Grid item lg={6} xl={6} sm={6} xs={6}>
                        <Right></Right>
                    </Grid>
                </Grid>
            </ChoicesContainer>
        </Wrapper>
    )
}

export default CrossPageVideo