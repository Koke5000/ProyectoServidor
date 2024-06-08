import test from 'node:test';
import assert from "node:assert";
import UsuarioUseCases from '../usuarios/application/Usuario.UseCases';
import UsuarioRepositoryPostgres from '../usuarios/infrastructure/db/Usuario.Postgres';
import UsuarioRepository from '../usuarios/domain/Usuario.Repository';
import Usuario from '../usuarios/domain/Usuario';
import NoticiaUseCases from '../noticias/application/Noticia.UseCases';
import NoticiaRepositoryPostgres from '../noticias/infrastructure/db/Noticia.Postgres';
import ArmaduraUseCases from '../armaduras/application/Armadura.UseCases';
import ArmaduraRepositoryPostgres from '../armaduras/infrastructure/db/Armadura.Postgres';
import EspadaUseCases from '../espadas/application/Espada.UseCases';
import EspadaRepositoryPostgres from '../espadas/infrastructure/db/Espada.Postgres';
import GlifoUseCases from '../glifos/application/Glifo.UseCases';
import GlifoRepositoryPostgres from '../glifos/infrastructure/db/Glifo.Postgres';
import RunaUseCases from '../runas/application/Runa.UseCases';
import RunaRepositoryPostgres from '../runas/infrastructure/db/Runa.Postgres';
import PlantillaRepository from '../plantillas/domain/Plantilla.Repository';
import PlantillaRepositoryPostgres from '../plantillas/infrastructure/db/Plantilla.Postgres';
import PlantillaUseCases from '../plantillas/application/Plantilla.UseCases';

const usuarioRepository : UsuarioRepository = new UsuarioRepositoryPostgres();
const plantillaRepository : PlantillaRepository = new PlantillaRepositoryPostgres();
const plantillaUseCases : PlantillaUseCases = new PlantillaUseCases(plantillaRepository, usuarioRepository);
const usuarioUseCases : UsuarioUseCases = new UsuarioUseCases(usuarioRepository, plantillaRepository);
const noticiaUseCases : NoticiaUseCases = new NoticiaUseCases(new NoticiaRepositoryPostgres());
const armaduraUseCases : ArmaduraUseCases = new ArmaduraUseCases(new ArmaduraRepositoryPostgres());
const espadaUseCases : EspadaUseCases = new EspadaUseCases(new EspadaRepositoryPostgres());
const glifoUseCases : GlifoUseCases = new GlifoUseCases(new GlifoRepositoryPostgres());
const runaUseCases : RunaUseCases = new RunaUseCases(new RunaRepositoryPostgres());


// Usuarios:

test('registro', async () => {
    const usuario : Usuario = {
        nombre:'test',
        apellidos:'test',
        email:'210083@fppiramide.com',
        username: 'TestRegistro',
        password: 'Aa1aaaaaa'
    }

    const usuarioRegistro : Usuario = await usuarioUseCases.registro(usuario);
    assert.strictEqual(usuario.nombre, usuarioRegistro.nombre); 
}); 

test('login', async () => {
    const usuario : Usuario = {
        nombre:'test',
        apellidos:'test',
        email:'210080@fppiramide.com',
        username: 'Test',
        password: 'Aa1aaaaaa'
    }

    const loginCampos: any = {
/*         emailOrUsername: '210080@fppiramide.com',
 */        emailOrUsername: 'Test',
        password: 'Aa1aaaaaa'
    }
    const usuarioRegistro : Usuario = await usuarioUseCases.registro(usuario);
    const usuarioLogin : any = await usuarioUseCases.login(loginCampos);
    
    assert.strictEqual(usuarioRegistro.username || usuarioRegistro.email, usuarioLogin.username || usuarioLogin.email); 
}); 

test('perfil', async () => {
    const usuario : Usuario = {
        nombre:'test',
        apellidos:'test',
        email:'210090@fppiramide.com',
        username: 'Test2',
        password: 'Aa1aaaaaa'
    }

    const loginCampos: any = {
/*         emailOrUsername: '210080@fppiramide.com',
*/         emailOrUsername: 'Test',
        password: 'Aa1aaaaaa'
    }
    const usuarioRegistro : Usuario = await usuarioUseCases.registro(usuario);
    const usuarioLogin : any = await usuarioUseCases.login(loginCampos);    
    const usuarioAuth : Usuario = await usuarioUseCases.perfil(usuarioLogin.username);
    
    assert.strictEqual(usuarioRegistro.nombre, usuarioAuth.nombre); 
}); 

test('emailExists', async () => {
    const usuario = await usuarioUseCases.emailExists('210083@fppiramide.com');
    assert.strictEqual(usuario.email, '210083@fppiramide.com');
});

test('usernameExists', async () => {
    const usuario = await usuarioUseCases.usernameExists('ElWitchero');
    assert.strictEqual(usuario.username, 'ElWitchero');
});

//-------------------------------------------------------------------------------

// Noticias:

test('noticiasMain', async () => {
    const noticias = await noticiaUseCases.getNoticiasMainCategoriaPagina("CD Projekt RED", "0");
    assert.strictEqual(noticias.length, 1);
});

test('numPaginasMain', async () => {
    const paginas = await noticiaUseCases.getNumPaginasNoticias("CD Projekt RED");
    assert.strictEqual(paginas, 1);
});

test('noticiasMerch', async () => {
    const noticias = await noticiaUseCases.getNoticiasMerchandising("0");
    assert.strictEqual(noticias.length, 3);
});

test('numPaginasMerch', async () => {
    const paginas = await noticiaUseCases.getNumPaginasMerchandising();
    assert.strictEqual(paginas, 1);
});

//-------------------------------------------------------------------------------

// Armaduras:

test('armadurasCoraza', async () => {
    const armaduras = await armaduraUseCases.getArmadurasCoraza();
    assert.strictEqual(armaduras.length, 5);
});

test('armadurasGuantes', async () => {
    const armaduras = await armaduraUseCases.getArmadurasGuantes();
    assert.strictEqual(armaduras.length, 5);
});

test('armadurasPantalones', async () => {
    const armaduras = await armaduraUseCases.getArmadurasPantalones();
    assert.strictEqual(armaduras.length, 5);
});

test('armadurasBotas', async () => {
    const armaduras = await armaduraUseCases.getArmadurasBotas();
    assert.strictEqual(armaduras.length, 5);
});

//-------------------------------------------------------------------------------

// Espadas:

test('espadasAcero', async () => {
    const espadas = await espadaUseCases.getEspadasAcero();
    assert.strictEqual(espadas.length, 96);
});

test('espadasPlata', async () => {
    const espadas = await espadaUseCases.getEspadasPlata();
    assert.strictEqual(espadas.length, 15);
});

//-------------------------------------------------------------------------------

// Glifos:

test('glifos', async () => {
    const glifos = await glifoUseCases.getGlifos();
    assert.strictEqual(glifos.length, 27);
});

//-------------------------------------------------------------------------------

// Runas:

test('runas', async () => {
    const runas = await runaUseCases.getRunas();
    assert.strictEqual(runas.length, 30);
});

//-------------------------------------------------------------------------------

//Plantillas:

test('insertPlantilla', async () => {
    const loginCampos: any = {
        /*         emailOrUsername: '210080@fppiramide.com',
         */        emailOrUsername: 'Test',
                password: 'Aa1aaaaaa'
            }
    const usuarioLogin : any = await usuarioUseCases.login(loginCampos);    
    const token : string | undefined = usuarioLogin.username       
    const plantilla: any = {
        nombrePlantilla: "Test",
        idCoraza: 1,
        idGlifo1: 28,
        idGlifo2: 28,
        idGlifo3: 28,
        idGuantes: 7,
        idGlifo4: 28,
        idGlifo5: 28,
        idGlifo6: 28,
        idPantalones: 11,
        idGlifo7: 28,
        idGlifo8: 28,
        idGlifo9: 28,
        idBotas: 17,
        idGlifo10: 28,
        idGlifo11: 28,
        idGlifo12: 28,
        idEspadaAcero: 1,
        idRuna1: 31,
        idRuna2: 31,
        idRuna3: 31,
        idEspadaPlata: 100,
        idRuna4: 31,
        idRuna5: 31,
        idRuna6: 31
    }
    await plantillaUseCases.postPlantilla(token, plantilla)
    const usuarioAuth : Usuario = await usuarioUseCases.perfil(usuarioLogin.username);    
    assert.strictEqual(usuarioAuth.plantillas.length, 1); 
}); 

