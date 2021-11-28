const CLOUDINEY_ROOT_URL =
  "https://res.cloudinary.com/dkp8v4ni8/image/upload/v1638084375/seating%20chart/";
const GROUND_TEXTURE_FILE_NAME = "texture_wood_msbls4.jpg";
const NOTION_ROOT_URL = "https://www.notion.so/plasticmask/";

const CLEAR_COLOR = BABYLON.Color4.FromColor3(
  BABYLON.Color3.FromHexString("#202020")
);
const GROUND_WIDTH = 20;
const GROUND_HEIGHT = 20;
const SEAT_WIDTH = 2;
const SEAT_HEIGHT = 1;
const SEAT_DEPTH = 1;
const DEFAULT_CAMERA_POSITION = new BABYLON.Vector3(-10, 5, 12);

const BOX_COLORS = {
  Growth: BABYLON.Color3.Red(),
  ML: BABYLON.Color3.Black(),
  FE: BABYLON.Color3.Blue(),
  BE: BABYLON.Color3.Purple(),
  Design: BABYLON.Color3.Yellow(),
  "3D": BABYLON.Color3.Green(),
  empty: BABYLON.Color3.Gray(),
};

const GUI_COLORS = {
  Growth: "red",
  ML: "black",
  FE: "blue",
  BE: "purple",
  Design: "gray",
  "3D": "green",
  empty: "yellow",
};

const people = [
  {
    id: 1,
    name: "이준호",
    team: "Growth",
    url: "d90481f00d7f4476ac5e14cea9b517ee",
  },
  {
    id: 2,
    name: "유재준",
    team: "Growth",
    url: "3bcf037b4fd84246a69bcf2b61e33712",
  },
  {
    id: 3,
    name: "김민우",
    team: "ML",
    url: "d91e3eb7148648978a17dac592059585",
  },
  {
    id: 4,
    name: "김주호",
    team: "ML",
    url: "e804714d66674a40a9be2f45a4366c3a",
  },
  {
    id: 5,
    name: "이혜주",
    team: "ML",
    url: "5822f5dbf85841c39d4847c393b8c77f",
  },
  {
    id: 6,
    name: "차영부",
    team: "FE",
    url: "c2b8ac7639ed4bcaa878f4e0c2ccc862",
  },
  {
    id: 7,
    name: "김진용",
    team: "ML",
    url: "7b4f9adeab004a2ab3d3a4c59695fa99",
  },
  {
    id: 8,
    name: "박종광",
    team: "FE",
    url: "cb1285eff91f40919f47c0d109261efd",
  },
  {
    id: 9,
    name: "이재이",
    team: "Growth",
    url: "085ea5b0571d488a8b5d3674d55684d7",
  },
  {
    id: 10,
    name: "차민철",
    team: "FE",
    url: "6483bff7a66d483b9ad0bd9d59a3a7e9",
  },
  {
    id: 11,
    name: "김나예",
    team: "3D",
    url: "6192a9ddd20b4b3898ec9b481eadc4f7",
  },
  {
    id: 12,
    name: "이동민",
    team: "ML",
    url: "989ba16c7acb498193c806040777c115",
  },
  {
    id: 13,
    name: "김지웅",
    team: "3D",
    url: "0e76518b3bf1475084b96be1c8f39607",
  },
  {
    id: 14,
    name: "최철민",
    team: "BE",
    url: "dea7a91fe0564aff8e9c60967d9e46c4",
  },
  {
    id: 15,
    name: "유진혁",
    team: "FE",
    url: "6831d089d4b04360b3d65622925ba552",
  },
  {
    id: 16,
    name: "김준섭",
    team: "Design",
    url: "9c9a29cbc9fd4694b8a6dd1e6a791c8c",
  },
  {
    id: 17,
    name: "오형석",
    team: "Growth",
    url: "1a7513a770ae46d5be6f7dc892f25dd8",
  },
  {
    id: 18,
    name: "정인교",
    team: "BE",
    url: "212636909fd649df95c7f8e779d0fa4b",
  },
  {
    id: 19,
    name: "김부미",
    team: "Design",
    url: "d0f24236961349509e586b44206dd4bd",
  },
  {
    id: 20,
    name: "안숙",
    team: "Growth",
    url: "76a5b7e9f37646108ccb955fd26693a7",
  },
  {
    id: 21,
    name: "김동진",
    team: "FE",
    url: "117b2201029f4b96814f20bee80b1a0c",
  },
];

const seats = [
  // first line
  { id: 1, personId: 11, position: new BABYLON.Vector3(-6, 0, -6) },
  // { id: 2, personId: 12, position: new BABYLON.Vector3(-3, 0, -6) }, // 기둥
  { id: 3, personId: 12, position: new BABYLON.Vector3(0, 0, -6) },
  { id: 4, personId: 4, position: new BABYLON.Vector3(3, 0, -6) },
  { id: 5, personId: 0, position: new BABYLON.Vector3(6, 0, -6) },
  // second
  { id: 6, personId: 13, position: new BABYLON.Vector3(-6, 0, -3) },
  { id: 7, personId: 5, position: new BABYLON.Vector3(-3, 0, -3) },
  { id: 8, personId: 0, position: new BABYLON.Vector3(0, 0, -3) },
  { id: 9, personId: 7, position: new BABYLON.Vector3(3, 0, -3) },
  { id: 10, personId: 3, position: new BABYLON.Vector3(6, 0, -3) },
  // third
  { id: 11, personId: 19, position: new BABYLON.Vector3(-6, 0, 0) },
  { id: 12, personId: 16, position: new BABYLON.Vector3(-3, 0, 0) },
  { id: 13, personId: 21, position: new BABYLON.Vector3(0, 0, 0) },
  { id: 14, personId: 8, position: new BABYLON.Vector3(3, 0, 0) },
  { id: 15, personId: 6, position: new BABYLON.Vector3(6, 0, 0) },
  // fourth
  { id: 16, personId: 20, position: new BABYLON.Vector3(-6, 0, 3) },
  { id: 17, personId: 18, position: new BABYLON.Vector3(-3, 0, 3) },
  { id: 18, personId: 14, position: new BABYLON.Vector3(0, 0, 3) },
  { id: 19, personId: 15, position: new BABYLON.Vector3(3, 0, 3) },
  { id: 20, personId: 10, position: new BABYLON.Vector3(6, 0, 3) },
  // fifth
  { id: 21, personId: 0, position: new BABYLON.Vector3(-6, 0, 6) },
  { id: 22, personId: 9, position: new BABYLON.Vector3(-3, 0, 6) },
  { id: 23, personId: 17, position: new BABYLON.Vector3(0, 0, 6) },
  { id: 24, personId: 2, position: new BABYLON.Vector3(3, 0, 6) },
  { id: 25, personId: 1, position: new BABYLON.Vector3(6, 0, 6) },
];

let scene;
let prevCameraPosition;
let prevCameraTarget;

const initializeScene = () => {
  const renderingCanvas = document.querySelector("#renderingCanvas");

  if (renderingCanvas) {
    // create engine
    const engine = new BABYLON.Engine(renderingCanvas, true);

    // create scene
    scene = new BABYLON.Scene(engine);
    scene.useRightHandedSystem = true;
    scene.clearColor = CLEAR_COLOR;

    // create camera
    const camera1 = new BABYLON.UniversalCamera(
      "camera1",
      DEFAULT_CAMERA_POSITION,
      scene
    );
    camera1.setTarget(new BABYLON.Vector3(0, 0, 0));
    camera1.attachControl(renderingCanvas, false);
    camera1.inertia = 0.5;
    camera1.panningInertia = 0.5;
    camera1.orthoTop = 12;
    camera1.orthoBottom = -12;
    camera1.orthoLeft = -12 * (renderingCanvas.width / renderingCanvas.height);
    camera1.orthoRight = 12 * (renderingCanvas.width / renderingCanvas.height);

    // create light
    const light1 = new BABYLON.HemisphericLight(
      "light1",
      new BABYLON.Vector3(0, 1, 1),
      scene
    );
    light1.intensity = 0.9;

    // create ground
    const ground = BABYLON.MeshBuilder.CreateGround(
      "ground",
      { width: GROUND_WIDTH, height: GROUND_HEIGHT },
      scene
    );
    ground.position.y = -0.5;

    // create box material
    const boxMaterial = new BABYLON.StandardMaterial("boxMaterial", scene);
    const emissiveTexture = new BABYLON.Texture(
      `${CLOUDINEY_ROOT_URL}${GROUND_TEXTURE_FILE_NAME}`,
      scene
    );
    emissiveTexture.wrapU = BABYLON.Texture.WRAP_ADDRESSMODE;
    emissiveTexture.wrapV = BABYLON.Texture.WRAP_ADDRESSMODE;
    emissiveTexture.uScale = 1;
    emissiveTexture.vScale = 2;
    boxMaterial.emissiveTexture = emissiveTexture;
    boxMaterial.disableLighting = true;

    seats.forEach((seat, idx) => {
      const box = BABYLON.MeshBuilder.CreateBox(
        "seat",
        { width: SEAT_WIDTH, height: SEAT_HEIGHT, depth: SEAT_DEPTH },
        scene
      );
      box.position = seat.position;
      box.material = boxMaterial;

      const person = people.find((p) => p.id === seat.personId);
      box.renderOverlay = true;
      box.overlayColor = person ? BOX_COLORS[person.team] : BOX_COLORS["empty"];
      box.overlayAlpha = 0.3;

      if (person) {
        // GUI
        const plane = BABYLON.MeshBuilder.CreatePlane("plane", {
          width: 2,
          height: 1,
        });
        plane.parent = box;
        plane.position.y = box.position.y + 1;

        const advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateForMesh(
          plane
        );

        const button = BABYLON.GUI.Button.CreateSimpleButton(
          `${person.name}Button`,
          person.name
        );
        button.width = 1;
        button.height = 0.4;
        button.color = "white";
        button.fontSize = 150;
        button.background = GUI_COLORS[person.team];
        button.hoverCursor = "pointer";
        button.onPointerUpObservable.add(() => {
          window.open(`${NOTION_ROOT_URL}${person.url}`);
        });
        advancedTexture.addControl(button);
      }
    });

    const handleKeyDown = (event) => {
      if (event.key === "Shift") {
        prevCameraPosition = camera1.position.clone();
        prevCameraTarget = camera1.getTarget().clone();

        camera1.position = new BABYLON.Vector3(0, 5, 0);
        camera1.target = BABYLON.Vector3.Zero();
        camera1.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "Shift") {
        camera1.mode = BABYLON.Camera.PERSPECTIVE_CAMERA;
        camera1.position = prevCameraPosition;
        camera1.setTarget(prevCameraTarget);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    scene.onDisposeObservable.addOnce(() => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    });

    engine.runRenderLoop(() => {
      scene.render();
    });
  }
};

const init = () => {
  initializeScene();
};

window.addEventListener("load", init);
