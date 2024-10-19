import Button from '@mui/material/Button'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Drawer from '@mui/material/Drawer'
import Fab from '@mui/material/Fab'
import IconButton from '@mui/material/IconButton'
import Snackbar from '@mui/material/Snackbar'
import Close from '@mui/icons-material/Close'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Switch from '@mui/material/Switch'




const App = () => {
  return (
    <>
     <AppBar position="fixed" color="primary">
       <Toolbar>
         <Typography variant="h6">
           Lorem ipsum dolor sit amet.
         </Typography>
       </Toolbar>
     </AppBar>

     <Button style={{marginTop: "100px"}} variant="outlined" color="success">
       There is a rock
     </Button>

     <Container maxWidth="md">
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolorem dignissimos eius, provident consequatur voluptas eos nesciunt id saepe quis voluptatum ipsam excepturi ex amet natus dicta, quibusdam totam molestiae voluptate. Dolores vero saepe quis ea facilis magnam libero magni eligendi. Accusamus veniam dolore possimus magnam? Sit cum sapiente numquam eaque voluptatem qui earum doloremque veritatis officiis, nobis facilis vitae, cupiditate velit assumenda est? Soluta voluptatem, repudiandae, quas non sed reiciendis voluptas dicta eaque voluptatum ex molestiae deserunt nostrum corrupti, accusamus quo consectetur voluptate rerum aut expedita veritatis libero maiores. Itaque vel saepe dolorem adipisci architecto obcaecati temporibus quos aperiam quam minus. Accusamus eius iste illum deleniti. Iure molestias autem, eveniet eum illo modi, aperiam neque nemo tempore accusamus voluptatem odio facere quis delectus non id dignissimos aspernatur amet! Unde ducimus facilis minima, consequatur, labore provident fugit molestiae quibusdam ratione nesciunt nam eveniet eius iure repudiandae itaque exercitationem corporis doloribus illo voluptates minus voluptas temporibus perspiciatis optio? Odit cumque nam accusamus incidunt obcaecati dolorem vitae suscipit explicabo perspiciatis sed, nostrum aspernatur optio eum consectetur atque tenetur facilis sequi assumenda corrupti commodi soluta porro facere dignissimos! Nihil, debitis consequatur consequuntur fugit ullam laudantium perspiciatis libero distinctio inventore hic tempora ad officiis, cum qui error soluta blanditiis, ipsa veritatis. Sapiente vero voluptate delectus eius commodi animi totam adipisci ipsum perspiciatis ex sit incidunt quos hic ab, voluptatem impedit natus voluptatum vel? Earum exercitationem eum, perferendis corporis tenetur quas asperiores vel fugiat totam minus distinctio quo temporibus illo nesciunt. Quasi voluptatum nobis praesentium consectetur error perferendis, nemo facilis culpa alias, laudantium molestias adipisci nisi libero fugit cumque corporis veniam. Eos, ullam aspernatur animi perspiciatis possimus itaque veniam sint dolorum, neque, eligendi vitae suscipit et dignissimos vel voluptate soluta commodi omnis in. Mollitia tempore animi possimus pariatur veritatis esse deleniti quia ratione sed culpa eligendi architecto fugit rerum dolorum nihil odit quam laborum, quasi odio iure ad distinctio! Modi ipsam voluptates ratione commodi? Voluptate culpa alias odit, quod eum atque voluptatum porro ipsa quia in quos nesciunt praesentium dolorum labore, molestias perspiciatis deleniti! Consectetur quasi quibusdam excepturi aperiam, iure eius facere. Nemo, iste ad soluta quod veritatis voluptatem blanditiis nobis nesciunt labore! Porro, ex reprehenderit? Soluta suscipit asperiores deleniti quidem assumenda dicta eaque facilis quibusdam incidunt totam sed accusantium magni, veritatis vitae, cum fugit. Quaerat aut nihil in laborum labore dignissimos aliquam dolor commodi numquam nam tempore libero necessitatibus tempora, beatae quas accusantium illo eaque provident? Id voluptate consectetur excepturi ad laboriosam ea voluptatum eaque, magni corporis, obcaecati doloremque, quae rerum a beatae saepe non. Placeat aperiam aut deserunt ipsum in vero illo doloremque veritatis assumenda nulla dolorum est eos, architecto vel vitae sequi corporis! Dolore obcaecati earum omnis repudiandae at officia modi beatae est, fugit labore aliquid cum! Ullam unde harum natus, similique laborum temporibus tempora voluptate velit sed dignissimos autem distinctio excepturi neque. Nulla, iste vitae ipsum illum illo magnam quibusdam nihil ex pariatur mollitia adipisci! Similique minus reprehenderit velit pariatur sapiente est. Voluptatibus temporibus architecto illum distinctio id! Ducimus, odio voluptas.
     </Container>

    <Snackbar
      open={true}
      message="mellow"
    />

    <FormControl>
      <FormLabel>mellow</FormLabel>
      
      <FormHelperText>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus tempore architecto quis.</FormHelperText>
    </FormControl>
    <TextField
      id="asd"
      label="mellow"
      variant="standard"
      color="primary"
      margin="none"
      sizes="small"      
    />

    <Switch
      value="mellow"      
    />

    <Typography variant="h5" color="primary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsam? Iste, molestias?</Typography>
    </>
  )
}

export default App
