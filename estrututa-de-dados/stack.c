#include <stdio.h>
#include <stdlib.h>

struct Stack {
  int totalSize;
  int elCount;
  int *stack;
};

// ✅ create
// ✅ isEmpty
// ✅ ifFull
// ✅ push
// ✅ peek
// ✅ pop

struct Stack *createStack(int totalSize) {
  struct Stack *stack = (struct Stack *)malloc(sizeof(struct Stack));

  stack->totalSize = totalSize;
  stack->elCount = 0;
  stack->stack = (int *)malloc(sizeof(int) * totalSize);

  return stack;
}

int isFull(struct Stack *stack) {
  if (stack->totalSize == stack->elCount) {
    return 1;
  }

  return 0;
}

int isEmpty(struct Stack *stack) {
  if (stack->elCount == 0) {
    return 1;
  }

  return 0;
}

int push(struct Stack *stack, int el) {
  if (isFull(stack)) {
    return 0;
  }

  stack->stack[stack->elCount] = el;
  stack->elCount++;
}

int peek(struct Stack *stack) {
  if (isEmpty(stack)) {
    return 0;
  }

  return stack->stack[stack->elCount - 1];
}

int pop(struct Stack *stack) {
  if (isEmpty(stack)) {
    return 0;
  }

  stack->elCount--;
  return stack->stack[stack->elCount];
}

void main() {
  struct Stack *stack = createStack(5);
  printf("Stack criada.\n");

  printf("Está vazia? \n"); // 1
  printf("%d\n", isEmpty(stack));

  printf("Está Cheia? \n"); // 0
  printf("%d\n", isFull(stack));
  push(stack, 23);
  push(stack, 46);
  push(stack, 57);
  push(stack, 64);
  push(stack, 95);
  printf("Elementos adicionados na stack com sucesso!\n");

  //   int isPushedSuccessfully = push(stack, 100);

  //   if (!isPushedSuccessfully) {
  //     printf("Stack cheia, não é possível adicionar elementos.");
  //     return;
  //   }

  int lastElement = peek(stack);
  printf("Último elemento: %d \n", lastElement); // 95

  pop(stack);
  int popedEl = pop(stack);
  printf("Elemento retirado: %d \n", popedEl); // 64
}