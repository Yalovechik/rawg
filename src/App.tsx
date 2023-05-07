import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <div>
      <Grid templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"` //large 1024px
      }}>
        <GridItem area="nav" bg="blue">Nav</GridItem>
        <Show above='lg'>
        <GridItem area="aside" bg="coral">Aside</GridItem>
        </Show>
        <GridItem area="main" bg="yellow">Main</GridItem>

      </Grid>
      
    </div>
  )
}

export default App
