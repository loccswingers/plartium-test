self.__uv$config = {
    prefix: '/service/sf/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/sf/sf.handler.js',
    bundle: '/sf/sf.bundle.js',
    config: '/sf/sf.config.js',
    sw: '/sf/sf.sw.js',
};