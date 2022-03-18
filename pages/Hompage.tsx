import {
    initPlasmicLoader,
    PlasmicRootProvider,
    PlasmicComponent,
    ComponentRenderData,
    usePlasmicQueryData,
    extractPlasmicQueryData,
  } from '@plasmicapp/loader-nextjs';
  import { PLASMIC } from '../plasmic-init';

  
  // Rendering page
  export default function Hompage() {
    return (
        <PlasmicRootProvider loader={PLASMIC}>
            <PlasmicComponent component="Hompage" />
        </PlasmicRootProvider>
    );
  }