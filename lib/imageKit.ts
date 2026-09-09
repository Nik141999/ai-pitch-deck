import ImageKit, {toFile} from "@imagekit/nodejs"

let imageKitClient: ImageKit | null = null;

function getImageKitClient(): ImageKit {
    const privateKey = process.env.IMAGEKIT_PRIVATE_KEY;
    if (!privateKey) {
        throw new Error("IMAGEKIT_API_KEY is not set");
    }
    imageKitClient ??= new ImageKit({privateKey});
    return imageKitClient;
}