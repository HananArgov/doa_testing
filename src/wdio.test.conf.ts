import { config } from "wdio_test/src/wdio.conf";

config.capabilities = [{
    browserName: 'chrome',
    'goog:chromeOptions': {args:['--headless=new']}
}]

config.rootDir = process.cwd()
export {config}