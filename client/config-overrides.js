
import path from 'path';

export default function override(config) {
    config.output.path = path.resolve(__dirname, 'dist');
    return config;
}
