const msg = 'test';
console.log(msg);
document.write(msg);

const ast = {
  type: 'File',
  start: 0,
  end: 62,
  loc: { start: { line: 1, column: 0 }, end: { line: 4, column: 0 } },
  errors: [],
  program: {
    type: 'Program',
    start: 0,
    end: 62,
    loc: { start: { line: 1, column: 0 }, end: { line: 4, column: 0 } },
    sourceType: 'module',
    interpreter: null,
    body: [
      {
        type: 'VariableDeclaration',
        start: 0,
        end: 19,
        loc: { start: { line: 1, column: 0 }, end: { line: 1, column: 19 } },
        declarations: [
          {
            type: 'VariableDeclarator',
            start: 6,
            end: 18,
            loc: { start: { line: 1, column: 6 }, end: { line: 1, column: 18 } },
            id: {
              type: 'Identifier',
              start: 6,
              end: 9,
              loc: {
                start: { line: 1, column: 6 },
                end: { line: 1, column: 9 },
                identifierName: 'msg',
              },
              name: 'msg',
            },
            init: {
              type: 'StringLiteral',
              start: 12,
              end: 18,
              loc: { start: { line: 1, column: 12 }, end: { line: 1, column: 18 } },
              extra: { rawValue: 'test', raw: "'test'" },
              value: 'test',
            },
          },
        ],
        kind: 'const',
      },
      {
        type: 'ExpressionStatement',
        start: 40,
        end: 60,
        loc: { start: { line: 3, column: 0 }, end: { line: 3, column: 20 } },
        expression: {
          type: 'CallExpression',
          start: 40,
          end: 59,
          loc: { start: { line: 3, column: 0 }, end: { line: 3, column: 19 } },
          callee: {
            type: 'MemberExpression',
            start: 40,
            end: 54,
            loc: { start: { line: 3, column: 0 }, end: { line: 3, column: 14 } },
            object: {
              type: 'Identifier',
              start: 40,
              end: 48,
              loc: {
                start: { line: 3, column: 0 },
                end: { line: 3, column: 8 },
                identifierName: 'document',
              },
              name: 'document',
            },
            computed: false,
            property: {
              type: 'Identifier',
              start: 49,
              end: 54,
              loc: {
                start: { line: 3, column: 9 },
                end: { line: 3, column: 14 },
                identifierName: 'write',
              },
              name: 'write',
            },
          },
          arguments: [
            {
              type: 'Identifier',
              start: 55,
              end: 58,
              loc: {
                start: { line: 3, column: 15 },
                end: { line: 3, column: 18 },
                identifierName: 'msg',
              },
              name: 'msg',
            },
          ],
        },
      },
    ],
    directives: [],
  },
  comments: [],
};
