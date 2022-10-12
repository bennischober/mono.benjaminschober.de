import os
import gc
import argparse
import shutil


def main():
    '''
    This function handles the command line arguments and calls the appropriate
    functions to generate the code.

    This is usually used to create a new project / a new job or education entry.
    '''
    parser = argparse.ArgumentParser()
    parser.add_argument("path", help="Path to generate the file(s)", type=str)
    # add parser argument for names str array
    parser.add_argument(
        "names", help="Names of the files to be generated", type=str, nargs='+')

    parser.add_argument('-json', help="Generate JSON file",
                        default=False, action='store_true')

    args = parser.parse_args()
    generate_files(args)

    print("Successfully generated the files!")


def generate_files(args):
    '''
    This function generates the code for the files.
    '''
    for name in args.names:
        if args.json:
            write_file(args, name, '.json')
        else:
            write_file(args, name, '.md')

    gc.collect()


def write_file(args, name, ending):
    try:
        shutil.copyfile("template" + ending,
                        os.path.join(args.path, name + ending))
    except Exception as e:
        raise e


if __name__ == "__main__":
    main()
