# the last release of nixpkgs-21.11
with import
    (builtins.fetchTarball {
        url = "https://github.com/NixOS/nixpkgs/archive/refs/tags/21.11.tar.gz";
        sha256 = "162dywda2dvfj1248afxc45kcrg83appjd0nmdb541hl7rnncf02";
    })
{ };
stdenv.mkDerivation {
    name = "cryptomariogame-dev";
    buildInputs = [
        bash
        nodejs
        yarn
    ];
    shellHook = ''
        export NODE_OPTIONS=--max_old_space_size=4096
    '' + lib.optionalString stdenv.isLinux ''
        export npm_config_build_from_source=true  # build npm binaries from source
    '';
}