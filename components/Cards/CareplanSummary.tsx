import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Component } from 'react';
import { PatientCareplan } from '../Models/PatientCareplan';
import Button from '@mui/material/Button';
import { CardHeader, Grid, Typography } from '@mui/material';
import IDateHelper from '../../globalHelpers/interfaces/IDateHelper';
import ApiContext from '../../pages/_context';
import { Link } from 'react-router-dom';
import ICareplanService from '../../services/interfaces/ICareplanService';
import { ConfirmationButton } from '../Input/ConfirmationButton';

export interface Props {
    careplan : PatientCareplan
}


export class CareplanSummary extends Component<Props,{}> {
  static displayName = CareplanSummary.name;
  static contextType = ApiContext;
  dateHelper! : IDateHelper
  careplanService! : ICareplanService;

  InitialiseServices() : void {
      this.dateHelper = this.context.dateHelper;
      this.careplanService = this.context.careplanService
  }
  
  async finishCareplan(careplan : PatientCareplan) :  Promise<void>{
    try{
      await this.careplanService.TerminateCareplan(careplan)
    }  catch(error : any){
      this.setState(()=>{throw error})
    }  
  }

  render ()  : JSX.Element{
      this.InitialiseServices()
      const careplan = this.props.careplan;
    return (
        <Card>
            <CardHeader subheader={
            <>
            Monitoreringsplan 
            <Button component={Link} to={"/patients/"+careplan.patient.cpr+"/edit/plandefinition"}>
                <ModeEditOutlineIcon fontSize="inherit"/> 
            </Button>
            </>
            }/>
            <CardContent>
                <Grid container>
                    <Grid item xs={10}>
                            <Typography variant="caption">
                            Afdeling
                        </Typography>
                        <Typography>
                            {careplan.department}
                        </Typography>
                        <br/>
                        <Typography variant="caption">
                            Patientgrupper
                        </Typography>
                        <Typography>
                        {careplan.planDefinitions.map(x=>x.name).join(", ")}
                        </Typography>
                        <br/>
                        <Typography variant="caption">
                            Opstart
                        </Typography>
                        <Typography>
                            {this.dateHelper.DateToString( careplan.creationDate)}
                        </Typography>
                        <br/>
                            <ConfirmationButton color="error" title="Afslut monitoreringsplan?" buttonText="Afslut monitoreringsplan" action={async () => await this.finishCareplan(careplan)}>
                            Er du sikker på at du ønsker at afslutte patientens monitoreringsplan?
                            </ConfirmationButton>
                    </Grid>
                    <Grid item xs={2}>

                    </Grid>
                </Grid>
                
            </CardContent>
        </Card>
    );
  }
}
