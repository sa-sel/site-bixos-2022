import { Component } from '@angular/core'

@Component({
  selector: 'app-ic-extra',
  templateUrl: './ic-extra.component.html',
  styleUrls: ['./ic-extra.component.scss'],
})
export class IcExtraComponent {
  r = 'Representatividade'
  a = 'Artística'
  s = 'Social'
  e = 'Esportes'
  t = 'Técnica'
  n = 'Negócios'

  extras: any[] = [
    {
      grupo: 'Abuscar',
      categoria: `${this.r}`,
      site: 'https://www.facebook.com/abusanca/',
    },
    {
      grupo: 'ACASO Teatro',
      categoria: `${this.a}`,
      site: 'https://www.facebook.com/grupoacaso/',
    },
    {
      grupo: 'AIESEC - São Carlos',
      categoria: `${this.s}`,
      site: 'https://aiesec.org.br/',
    },
    {
      grupo: 'Atlética CAASO',
      categoria: `${this.e}`,
      site: 'http://atleticacaaso.com/',
    },
    {
      grupo: 'Abuscar',
      categoria: `${this.r}`,
      site: 'https://www.facebook.com/abusanca/',
    },
    {
      grupo: 'Baja EESC - USP',
      categoria: `${this.t}`,
      site: 'https://www.bajaeescusp.com/',
    },
    {
      grupo: 'CAASO',
      categoria: `${this.r}`,
      site: 'https://www.facebook.com/CAASO.USP/',
    },
    {
      grupo: 'Campanha USP do Agasalho',
      categoria: `${this.s}`,
      site: 'https://www.facebook.com/campanhadoagasalhouspsc/',
    },
    {
      grupo: 'Centro de Voluntariado Universitário de São Carlos',
      categoria: `${this.s}`,
      site: 'https://www.facebook.com/cvusc/',
    },
    {
      grupo: 'Cia de Dança CAASO',
      categoria: `${this.a}`,
      site: 'https://www.facebook.com/CompanhiadeDancaCAASO/',
    },
    {
      grupo: 'Coletivo de Mulheres CAASO/FEDERAL',
      categoria: `${this.r}`,
      site: 'https://www.facebook.com/coletivomulherescaasoufscar/',
    },
    {
      grupo: 'Coletivo Negro Elza Soares',
      categoria: `${this.r}`,
      site: 'https://www.facebook.com/coletivoelzasoares/',
    },
    {
      grupo: 'ECon Equipe de Concreto',
      categoria: `${this.t}`,
      site: 'https://www.facebook.com/econeescusp/',
    },
    {
      grupo: 'EESC - USP Aerodesign',
      categoria: `${this.t}`,
      site: 'http://www3.eesc.usp.br/aerodesign/',
    },
    {
      grupo: 'EESC - USP Formula SAE',
      categoria: `${this.t}`,
      site: 'https://formula.eesc.usp.br/',
    },
    {
      grupo: 'EESC - USP Mileage',
      categoria: `${this.t}`,
      site: 'http://www.mileage.eesc.usp.br/',
    },
    {
      grupo: 'EESC - USP Tupã',
      categoria: `${this.t}`,
      site: 'https://linktr.ee/TupaUsp',
    },
    {
      grupo: 'Empresa Junior EESC jr.',
      categoria: `${this.t}, ${this.n}`,
      site: 'http://eescjr.com.br/',
    },
    {
      grupo: 'Enactus CAASO - USP',
      categoria: `${this.s}`,
      site: 'https://www.facebook.com/EnactusCSaoCarlos/',
    },
    {
      grupo: 'FoCA',
      categoria: `${this.a}`,
      site: 'https://www.facebook.com/grupoFoCA/',
    },
    {
      grupo: 'GAPeria (Bateria do CAASO)',
      categoria: `${this.a}`,
      site: 'https://www.facebook.com/gaperia/',
    },
    {
      grupo: 'GEISA',
      categoria: `${this.t}`,
      site: 'https://www.facebook.com/geisasaocarlos/',
    },
    {
      grupo: 'GMA - Grupo de Manutenção de Aeronaves',
      categoria: `${this.t}`,
      site: 'https://www.facebook.com/gmausp/',
    },
    {
      grupo: 'Grupo de Som CAASO',
      categoria: `${this.a}`,
      site: 'https://www.facebook.com/gsomcaaso/',
    },
    {
      grupo: 'IEEE Student Branch',
      categoria: `${this.t}, ${this.s}`,
      site: 'https://www.facebook.com/ieeeuspsc/',
    },
    {
      grupo: 'Liga de Empreendedorismo de São Carlos',
      categoria: `${this.n}`,
      site: 'https://www.facebook.com/ligadeempreendedorismosc/',
    },
    {
      grupo: 'Liga do Mercado Financeiro de São Carlos',
      categoria: `${this.n}`,
      site: 'https://www.lmf-saocarlos.com/',
    },
    {
      grupo: 'NUANCES',
      categoria: `${this.r}`,
      site: 'https://www.facebook.com/nuancescaaso/?fref=mentions',
    },
    {
      grupo: 'Operação Natal',
      categoria: `${this.s}`,
      site: 'https://www.facebook.com/operacaonatalsc/',
    },
    {
      grupo: 'Projeto Semente',
      categoria: `${this.s}`,
      site: 'https://www.facebook.com/semente.usp/',
    },
    {
      grupo: 'Projeto Sol',
      categoria: `${this.s}`,
      site: 'https://www.facebook.com/projetosol.sc/',
    },
    {
      grupo: 'SA-SEL',
      categoria: `${this.r}`,
      site: 'https://www.facebook.com/sasel.usp/',
    },
    {
      grupo: 'Sanca Social',
      categoria: `${this.s}`,
      site: 'https://www.facebook.com/sancasocial/',
    },
    { grupo: 'Semear', categoria: `${this.t}`, site: 'http://www.semear.eesc.usp.br/' },
    {
      grupo: 'Topus - Pesquisas Aeroespaciais',
      categoria: `${this.t}`,
      site: 'http://facebook.com/grupotopus',
    },
    {
      grupo: 'Warthog Robotics',
      categoria: `${this.t}`,
      site: 'https://www.facebook.com/WarthogRobotics/',
    },
    { grupo: 'Zenith - USP', categoria: `${this.t}`, site: 'http://zenith.eesc.usp.br/' },
  ]
}
